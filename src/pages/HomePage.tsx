import { useState, useCallback, useRef } from 'react';
import { toast } from 'sonner';
import { Hash, Search } from 'lucide-react';
import SearchBar from '@/components/features/SearchBar';
import FilterBar from '@/components/features/FilterBar';
import SongCard from '@/components/features/SongCard';
import StatsBar from '@/components/features/StatsBar';
import EmptyState from '@/components/features/EmptyState';
import { searchNewgroundsSongs, lookupSongById } from '@/lib/ngApi';
import { checkWhitelistBatch } from '@/lib/gdApi';
import type { NGSong, SearchFilters } from '@/types';

const DEFAULT_FILTERS: SearchFilters = {
  query: '',
  genre: '',
  sort: 'relevance',
  format: '',
  minLength: '',
  maxLength: '',
};

type PageState = 'idle' | 'loading' | 'loaded' | 'error';
type SearchMode = 'library' | 'id';

export default function HomePage() {
  const [searchMode, setSearchMode] = useState<SearchMode>('library');
  const [filters, setFilters] = useState<SearchFilters>(DEFAULT_FILTERS);
  const [idInput, setIdInput] = useState('');
  const [songs, setSongs] = useState<NGSong[]>([]);
  const [pageState, setPageState] = useState<PageState>('idle');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [whitelistOnly, setWhitelistOnly] = useState(false);
  const [checkingWhitelist, setCheckingWhitelist] = useState(false);
  const [searchSource, setSearchSource] = useState<'live' | 'local' | null>(null);
  const checkAbortRef = useRef<boolean>(false);

  // Run live GD whitelist checks on songs that haven't been verified yet
  const runWhitelistChecks = useCallback(async (toCheck: NGSong[]) => {
    checkAbortRef.current = true;
    await new Promise((r) => setTimeout(r, 50));
    checkAbortRef.current = false;

    const idsToCheck = toCheck.filter((s) => s.gdStatus === 'unchecked').map((s) => s.id);
    if (idsToCheck.length === 0) return;

    setCheckingWhitelist(true);
    setSongs((prev) =>
      prev.map((s) => (idsToCheck.includes(s.id) ? { ...s, gdStatus: 'checking' } : s))
    );

    try {
      await checkWhitelistBatch(
        idsToCheck,
        (id, isWhitelisted) => {
          if (checkAbortRef.current) return;
          setSongs((prev) =>
            prev.map((s) =>
              s.id === id
                ? { ...s, gdStatus: isWhitelisted ? 'whitelisted' : 'not-whitelisted' }
                : s
            )
          );
        },
        350,
      );
    } finally {
      setCheckingWhitelist(false);
    }
  }, []);

  // Library search mode
  const handleLibrarySearch = useCallback(async (searchFilters: SearchFilters, pageNum: number, append = false) => {
    if (pageNum === 1) {
      setPageState('loading');
      if (!append) setSongs([]);
    } else {
      setLoadingMore(true);
    }

    try {
      const result = await searchNewgroundsSongs(searchFilters, pageNum);
      const incoming = result.songs;

      if (!append) setSearchSource(result.source || null);

      if (append) {
        setSongs((prev) => {
          const existingIds = new Set(prev.map((s) => s.id));
          return [...prev, ...incoming.filter((s) => !existingIds.has(s.id))];
        });
      } else {
        setSongs(incoming);
      }

      setHasMore(result.hasMore);
      setPageState('loaded');

      // Run live GD checks on results that aren't already known
      const needsCheck = incoming.filter((s) => s.gdStatus === 'unchecked');
      if (needsCheck.length > 0) {
        runWhitelistChecks(needsCheck);
      }
    } catch (err) {
      console.error('Search error:', err);
      setPageState('loaded');
      toast.error('Search failed');
    } finally {
      setLoadingMore(false);
    }
  }, [runWhitelistChecks]);

  // Direct ID lookup mode — check ID via boomlings
  const handleIdLookup = useCallback(async () => {
    const ids = idInput
      .split(/[\s,]+/)
      .map((s) => parseInt(s.trim()))
      .filter((n) => !isNaN(n) && n > 0);

    if (ids.length === 0) {
      toast.error('Enter a valid Newgrounds song ID');
      return;
    }

    setPageState('loading');
    setSongs([]);

    // Create placeholder songs
    const placeholders: NGSong[] = ids.map((id) => ({
      id,
      title: `Song #${id}`,
      artist: 'Looking up…',
      artistUrl: `https://www.newgrounds.com/audio/listen/${id}`,
      genre: '',
      score: 0,
      views: 0,
      url: `https://www.newgrounds.com/audio/listen/${id}`,
      gdStatus: 'checking' as const,
    }));

    setSongs(placeholders);
    setPageState('loaded');
    setHasMore(false);
    setCheckingWhitelist(true);

    // Look up each ID directly via boomlings
    const results: NGSong[] = [];
    for (const id of ids) {
      const song = await lookupSongById(id);
      if (song) {
        results.push(song);
        setSongs((prev) =>
          prev.map((s) =>
            s.id === id ? { ...song, gdStatus: 'whitelisted' } : s
          )
        );
      } else {
        setSongs((prev) =>
          prev.map((s) =>
            s.id === id
              ? { ...s, title: `Song #${id}`, artist: 'Not found / Not whitelisted', gdStatus: 'not-whitelisted' }
              : s
          )
        );
      }
    }

    setCheckingWhitelist(false);

    if (results.length === 0) {
      toast.info('No whitelisted songs found for those IDs');
    } else {
      toast.success(`Found ${results.length} GD-whitelisted song${results.length > 1 ? 's' : ''}`);
    }
  }, [idInput]);

  const handleSearch = () => {
    setPage(1);
    handleLibrarySearch(filters, 1);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    handleLibrarySearch(filters, nextPage, true);
  };

  const displayedSongs = whitelistOnly
    ? songs.filter((s) => s.gdStatus === 'whitelisted' || s.gdStatus === 'checking' || s.gdStatus === 'unchecked')
    : songs;

  const whitelistedCount = songs.filter((s) => s.gdStatus === 'whitelisted').length;
  const notWhitelistedCount = songs.filter((s) => s.gdStatus === 'not-whitelisted').length;

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">

      {/* Mode Tabs */}
      <div className="flex items-center gap-1 mb-6 rounded-xl border border-white/10 bg-gd-surface p-1 w-fit">
        <button
          onClick={() => { setSearchMode('library'); setPageState('idle'); setSongs([]); }}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            searchMode === 'library'
              ? 'bg-gd-primary text-white shadow'
              : 'text-gd-muted hover:text-white'
          }`}
        >
          <Search className="w-4 h-4" />
          Song Library
        </button>
        <button
          onClick={() => { setSearchMode('id'); setPageState('idle'); setSongs([]); }}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            searchMode === 'id'
              ? 'bg-gd-primary text-white shadow'
              : 'text-gd-muted hover:text-white'
          }`}
        >
          <Hash className="w-4 h-4" />
          Check by ID
        </button>
      </div>

      {searchMode === 'library' ? (
        <>
          {/* Library Search */}
          <div className="mb-6">
            <SearchBar
              value={filters.query}
              onChange={(v) => setFilters((f) => ({ ...f, query: v }))}
              onSearch={handleSearch}
              loading={pageState === 'loading'}
            />
          </div>
          <div className="mb-6">
            <FilterBar filters={filters} onChange={setFilters} />
          </div>
          <div className="mb-4 rounded-xl border border-gd-primary/20 bg-gd-primary/5 px-4 py-3 text-sm text-gd-muted leading-relaxed">
            <span className="text-white font-medium">Live Newgrounds Search</span> —
            Searches Newgrounds audio, then verifies each result against the GD whitelist API.{' '}
            Falls back to{' '}
            <span className="text-gd-primary font-medium">local library</span> if NG is unreachable.
            Use <span className="text-white font-medium">Check by ID</span> to verify any specific song ID.
          </div>
        </>
      ) : (
        <>
          {/* ID Lookup */}
          <div className="mb-6">
            <div className="rounded-xl border border-white/10 bg-gd-surface p-5">
              <h2 className="text-sm font-semibold text-white mb-1">Check Song ID(s)</h2>
              <p className="text-xs text-gd-muted mb-4">
                Enter one or more Newgrounds song IDs (comma or space separated) to check if they're GD whitelisted.
                This uses the same method as the GD game itself.
              </p>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={idInput}
                  onChange={(e) => setIdInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleIdLookup()}
                  placeholder="e.g. 536290, 481283, 617309"
                  className="flex-1 rounded-lg border border-white/10 bg-gd-bg text-white px-4 py-3 text-sm outline-none focus:border-gd-primary focus:ring-1 focus:ring-gd-primary/30 placeholder:text-gd-muted transition-colors"
                />
                <button
                  onClick={handleIdLookup}
                  disabled={pageState === 'loading' || checkingWhitelist}
                  className="px-6 py-3 rounded-lg bg-gd-primary hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold transition-colors"
                >
                  {checkingWhitelist ? 'Checking…' : 'Check'}
                </button>
              </div>
              <p className="mt-3 text-xs text-gd-muted">
                Find song IDs on{' '}
                <a
                  href="https://www.newgrounds.com/audio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gd-primary hover:underline"
                >
                  newgrounds.com/audio
                </a>{' '}
                — the ID is the number in the URL: /audio/listen/<span className="text-white">536290</span>
              </p>
            </div>
          </div>
        </>
      )}

      {/* Results header */}
      {pageState === 'loaded' && songs.length > 0 && (
        <div className="mb-5 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <StatsBar songs={songs} total={songs.length} />
            {searchSource === 'live' && (
              <span className="text-xs px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 font-medium">
                ✓ Live from Newgrounds
              </span>
            )}
            {searchSource === 'local' && (
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gd-muted">
                Local library
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            {checkingWhitelist && (
              <span className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-gd-primary/10 border border-gd-primary/30 text-gd-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-gd-primary animate-pulse" />
                Checking GD whitelist…
              </span>
            )}
            {!whitelistOnly && notWhitelistedCount > 0 && (
              <div className="flex items-center gap-2 text-xs text-gd-muted">
                <span className="text-gd-green font-medium">{whitelistedCount} ✓</span>
                <span>·</span>
                <span className="text-red-400">{notWhitelistedCount} ✗</span>
              </div>
            )}
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <button
                role="switch"
                aria-checked={whitelistOnly}
                onClick={() => setWhitelistOnly((v) => !v)}
                className={`relative w-10 h-5 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gd-primary ${
                  whitelistOnly ? 'bg-gd-green' : 'bg-white/15'
                }`}
              >
                <span
                  className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${
                    whitelistOnly ? 'translate-x-5' : 'translate-x-0.5'
                  }`}
                />
              </button>
              <span className="text-sm text-gd-muted">
                Whitelisted only
                {whitelistOnly && whitelistedCount > 0 && (
                  <span className="text-gd-green ml-1">({whitelistedCount})</span>
                )}
              </span>
            </label>
          </div>
        </div>
      )}

      {/* States */}
      {pageState === 'idle' && <EmptyState type="idle" />}

      {pageState === 'loading' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-white/8 bg-gd-surface p-4 animate-pulse">
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-lg bg-white/5" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-white/5 rounded w-3/4" />
                  <div className="h-3 bg-white/5 rounded w-1/2" />
                </div>
              </div>
              <div className="mt-3 space-y-2">
                <div className="h-6 bg-white/5 rounded w-1/2" />
                <div className="h-8 bg-white/5 rounded" />
              </div>
            </div>
          ))}
        </div>
      )}

      {pageState === 'loaded' && displayedSongs.length === 0 && !checkingWhitelist && (
        <EmptyState
          type="no-results"
          errorMsg={
            whitelistOnly && songs.length > 0
              ? `Found ${songs.length} song${songs.length > 1 ? 's' : ''}, but none are confirmed GD whitelisted. Try disabling the filter.`
              : searchMode === 'library'
              ? 'No songs matched your search. Try a different artist or song name.'
              : undefined
          }
        />
      )}

      {pageState === 'loaded' && displayedSongs.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {displayedSongs.map((song) => (
              <SongCard key={`${song.id}-${song.title}`} song={song} />
            ))}
          </div>

          {hasMore && searchMode === 'library' && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleLoadMore}
                disabled={loadingMore}
                className="rounded-xl border border-white/10 bg-gd-surface hover:bg-white/5 hover:border-white/20 px-8 py-3 text-sm font-medium text-white/80 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150"
              >
                {loadingMore ? 'Loading…' : 'Load More Songs'}
              </button>
            </div>
          )}
        </>
      )}

      {/* Info note */}
      <div className="mt-12 rounded-xl border border-white/8 bg-gd-surface p-4 text-xs text-gd-muted leading-relaxed">
        <strong className="text-white/60">How it works:</strong>{' '}
        <span className="text-white/50">Song Library</span> searches Newgrounds directly and verifies
        each result against the GD boomlings API (“∾|∾” in the response = whitelisted, “-1” = not whitelisted).
        Falls back to a local curated library when Newgrounds is unreachable. The{' '}
        <span className="text-white/50">Check by ID</span> tab lets you verify any specific song ID
        using the exact same check the GD game uses.
      </div>
    </main>
  );
}
