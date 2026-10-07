import type { NGSong, SearchFilters } from '@/types';

// ──────────────────────────────────────────────────────────────
// Newgrounds Audio Search
// Uses the undocumented inner=1 JSON endpoint discovered in gallery-dl:
// GET /search/conduct/audio?terms=...&inner=1&page=1
// with X-Requested-With: XMLHttpRequest header
// Returns JSON: { content: "<html snippets with audio links>" }
// Then each song ID is verified against the GD boomlings API.
// ──────────────────────────────────────────────────────────────

const NG_SEARCH_BASE = 'https://www.newgrounds.com/search/conduct/audio';

// Proxies that support GET with custom headers
const GET_PROXIES = [
  // allorigins supports custom Accept header passthrough
  (url: string) =>
    fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`, {
      headers: { Accept: 'application/json, text/javascript, */*; q=0.01' },
      signal: AbortSignal.timeout(10000),
    }),
  // corsproxy.io — pass headers via reqHeaders param
  (url: string) =>
    fetch(
      `https://corsproxy.io/?reqHeaders=X-Requested-With:XMLHttpRequest,Accept:application/json&url=${encodeURIComponent(url)}`,
      { signal: AbortSignal.timeout(10000) }
    ),
];

function buildNGSearchUrl(filters: SearchFilters, page: number): string {
  const params = new URLSearchParams({
    terms: filters.query || '',
    inner: '1',
    page: String(page),
    sort: filters.sort === 'score-desc' ? 'score-desc' : filters.sort === 'views-desc' ? 'views-desc' : 'date-desc',
  });
  if (filters.genre) params.set('genre', filters.genre);
  if (filters.format) params.set('format', filters.format);
  return `${NG_SEARCH_BASE}?${params.toString()}`;
}

function parseSongsFromHTML(html: string): NGSong[] {
  const songs: NGSong[] = [];
  const seen = new Set<number>();

  // Match audio listen links: /audio/listen/NNNNNN
  const linkRegex = /href="(?:https:\/\/www\.newgrounds\.com)?\/audio\/listen\/(\d+)"/g;
  // Match h4 titles that follow links
  const blockRegex = /href="[^"]*\/audio\/listen\/(\d+)"[^>]*>.*?<h4[^>]*>([^<]+)<\/h4>.*?by<\/span>\s*<[^>]+>([^<]+)<\//gs;

  // Strategy 1: try structured block extraction
  let match: RegExpExecArray | null;
  while ((match = blockRegex.exec(html)) !== null) {
    const id = parseInt(match[1]);
    if (!seen.has(id) && !isNaN(id)) {
      seen.add(id);
      songs.push(makeSong(id, decodeHTML(match[2].trim()), decodeHTML(match[3].trim())));
    }
  }

  // Strategy 2: simpler id+h4 adjacent extraction
  if (songs.length === 0) {
    const chunkRegex = /<a[^>]+\/audio\/listen\/(\d+)[^>]*>[\s\S]*?<h4[^>]*>(.*?)<\/h4>[\s\S]*?class="item-details-main"[\s\S]*?by[\s\S]*?([A-Za-z0-9 _\-]+)</g;
    while ((match = chunkRegex.exec(html)) !== null) {
      const id = parseInt(match[1]);
      if (!seen.has(id) && !isNaN(id)) {
        seen.add(id);
        songs.push(makeSong(id, decodeHTML(match[2].trim()), decodeHTML(match[3].trim())));
      }
    }
  }

  // Strategy 3: just extract IDs and use placeholder titles
  if (songs.length === 0) {
    while ((match = linkRegex.exec(html)) !== null) {
      const id = parseInt(match[1]);
      if (!seen.has(id) && !isNaN(id)) {
        seen.add(id);
        songs.push(makeSong(id, `Song #${id}`, 'Newgrounds'));
      }
    }
  }

  return songs;
}

function decodeHTML(s: string): string {
  return s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#39;/g, "'").replace(/&quot;/g, '"');
}

export async function searchNewgroundsLive(
  filters: SearchFilters,
  page: number = 1,
): Promise<{ songs: NGSong[]; hasMore: boolean; source: 'live' | 'local' }> {
  const url = buildNGSearchUrl(filters, page);
  console.log('NG search URL:', url);

  for (const proxy of GET_PROXIES) {
    try {
      const res = await proxy(url);
      if (!res.ok) continue;

      const text = await res.text();
      console.log('NG search raw (first 300):', text.slice(0, 300));

      // Try to parse as JSON first (inner=1 returns JSON)
      let html = text;
      try {
        const json = JSON.parse(text);
        if (json.content) html = json.content;
        else if (typeof json === 'string') html = json;
      } catch {
        // plain HTML response is fine too
      }

      const songs = parseSongsFromHTML(html);
      console.log('Parsed songs:', songs.length);

      if (songs.length > 0) {
        return { songs, hasMore: songs.length >= 20, source: 'live' };
      }
    } catch (e) {
      console.warn('NG search proxy failed:', e);
    }
  }

  // All proxies failed — fall back to local DB
  return { songs: [], hasMore: false, source: 'local' };
}

export function makeSong(
  id: number,
  title: string,
  artist: string,
  extras: Partial<NGSong> = {},
): NGSong {
  return {
    id,
    title,
    artist,
    artistUrl: `https://www.newgrounds.com/audio/listen/${id}`,
    genre: '',
    score: 0,
    views: 0,
    url: `https://www.newgrounds.com/audio/listen/${id}`,
    gdStatus: 'unchecked',
    ...extras,
  };
}

// Search: try live NG first, fall back to local DB
export async function searchNewgroundsSongs(
  filters: SearchFilters,
  page: number = 1,
): Promise<{ songs: NGSong[]; hasMore: boolean; source?: 'live' | 'local' }> {
  // Always try live search first if there's a real query
  if (filters.query || filters.genre) {
    try {
      const live = await searchNewgroundsLive(filters, page);
      if (live.songs.length > 0) return live;
    } catch (e) {
      console.warn('Live search failed, falling back to local DB', e);
    }
  }

  // Local DB fallback
  const { filterLocalSongs } = await import('@/lib/mockData');
  const allResults = filterLocalSongs(filters);
  const pageSize = 20;
  const start = (page - 1) * pageSize;
  const paginated = allResults.slice(start, start + pageSize);
  return {
    songs: paginated.map((s) => ({ ...s, gdStatus: 'whitelisted' as const })),
    hasMore: allResults.length > start + pageSize,
    source: 'local',
  };
}

// Lookup a single song ID via the boomlings GD API (proxied)
// Returns song info if whitelisted, null if not whitelisted or not found
export async function lookupSongById(songId: number): Promise<NGSong | null> {
  const { checkGDWhitelist } = await import('@/lib/gdApi');
  try {
    const info = await checkGDWhitelist(songId);
    if (!info.isWhitelisted) return null;

    // Parse actual song data from boomlings response
    const text = info.rawResponse || '';
    const parts = text.split('~|~');
    const map: Record<string, string> = {};
    for (let i = 0; i < parts.length - 1; i += 2) {
      map[parts[i]] = parts[i + 1];
    }

    const id = Number(map['1'] || songId);
    const title = map['2'] || `Song #${songId}`;
    const artist = map['4'] || 'Unknown';

    return {
      id,
      title,
      artist,
      artistUrl: `https://www.newgrounds.com/audio/listen/${id}`,
      genre: '',
      score: 0,
      views: 0,
      url: `https://www.newgrounds.com/audio/listen/${id}`,
      gdStatus: 'whitelisted',
    };
  } catch {
    return null;
  }
}
