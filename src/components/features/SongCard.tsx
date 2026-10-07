import { Copy, ExternalLink, CheckCircle, XCircle, Loader2, Music } from 'lucide-react';
import { toast } from 'sonner';
import type { NGSong } from '@/types';

interface SongCardProps {
  song: NGSong;
}

export default function SongCard({ song }: SongCardProps) {
  const handleCopyId = () => {
    navigator.clipboard.writeText(String(song.id));
    toast.success(`Copied song ID: ${song.id}`, {
      description: `"${song.title}" by ${song.artist}`,
    });
  };

  const statusConfig = {
    unchecked: {
      label: 'Queued…',
      icon: <Loader2 className="w-3.5 h-3.5 animate-spin opacity-40" />,
      cls: 'bg-white/5 border-white/10 text-gd-muted',
    },
    checking: {
      label: 'Checking GD…',
      icon: <Loader2 className="w-3.5 h-3.5 animate-spin" />,
      cls: 'bg-gd-primary/10 border-gd-primary/30 text-gd-primary',
    },
    whitelisted: {
      label: 'GD Whitelisted',
      icon: <CheckCircle className="w-3.5 h-3.5" />,
      cls: 'bg-gd-green/15 border-gd-green/40 text-gd-green',
    },
    'not-whitelisted': {
      label: 'Not Whitelisted',
      icon: <XCircle className="w-3.5 h-3.5" />,
      cls: 'bg-red-500/10 border-red-500/30 text-red-400',
    },
  };

  const status = statusConfig[song.gdStatus];

  const formatViews = (v: number) => {
    if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
    if (v >= 1_000) return `${(v / 1_000).toFixed(0)}K`;
    return String(v);
  };

  return (
    <div
      className={`group relative rounded-xl border bg-gd-surface transition-all duration-200 hover:border-white/20 hover:bg-white/5 ${
        song.gdStatus === 'whitelisted'
          ? 'border-gd-green/25 shadow-[0_0_12px_rgba(34,197,94,0.08)]'
          : song.gdStatus === 'not-whitelisted'
          ? 'border-red-500/15 opacity-55'
          : song.gdStatus === 'checking'
          ? 'border-gd-primary/20'
          : 'border-white/8'
      }`}
    >
      {/* Top accent line for whitelisted */}
      {song.gdStatus === 'whitelisted' && (
        <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-gd-green/50 to-transparent rounded-full" />
      )}

      <div className="p-4">
        {/* Header row */}
        <div className="flex items-start gap-3">
          {/* Song ID badge */}
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gd-bg border border-white/8 flex flex-col items-center justify-center">
            <span className="text-[9px] font-medium text-gd-muted leading-none">ID</span>
            <span className="text-xs font-bold text-gd-primary leading-tight mt-0.5 tabular-nums">
              {song.id > 9999 ? `${Math.floor(song.id / 1000)}K` : song.id}
            </span>
          </div>

          {/* Title & artist */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-white text-sm leading-snug line-clamp-2 group-hover:text-gd-primary transition-colors">
              {song.title}
            </h3>
            <p className="text-xs text-gd-muted mt-0.5 truncate">by {song.artist}</p>
          </div>
        </div>

        {/* Genre + score row */}
        <div className="mt-3 flex items-center gap-2 flex-wrap">
          {song.genre && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/8 text-gd-muted">
              {song.genre}
            </span>
          )}
          {song.score > 0 && (
            <span className="text-xs text-yellow-400 font-medium">★ {song.score.toFixed(1)}</span>
          )}
          {song.views > 0 && (
            <span className="text-xs text-gd-muted ml-auto">{formatViews(song.views)} views</span>
          )}
        </div>

        {/* Status badge */}
        <div className="mt-3">
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${status.cls}`}
          >
            {status.icon}
            {status.label}
          </span>
        </div>

        {/* Action buttons */}
        <div className="mt-3 flex items-center gap-2">
          <button
            onClick={handleCopyId}
            className="flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-gd-primary/15 hover:border-gd-primary/40 text-xs font-medium text-white/80 hover:text-white py-2 transition-all duration-150"
          >
            <Copy className="w-3.5 h-3.5" />
            Copy ID ({song.id})
          </button>
          <a
            href={song.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-orange-500/15 hover:border-orange-500/40 text-xs font-medium text-white/80 hover:text-orange-400 px-3 py-2 transition-all duration-150"
            aria-label="Open on Newgrounds"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>NG</span>
          </a>
        </div>
      </div>
    </div>
  );
}
