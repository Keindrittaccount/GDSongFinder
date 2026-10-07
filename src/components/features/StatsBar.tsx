import type { NGSong } from '@/types';

interface StatsBarProps {
  songs: NGSong[];
  total: number;
}

export default function StatsBar({ songs, total }: StatsBarProps) {
  const whitelisted = songs.filter((s) => s.gdStatus === 'whitelisted').length;
  const notWhitelisted = songs.filter((s) => s.gdStatus === 'not-whitelisted').length;
  const checking = songs.filter((s) => s.gdStatus === 'checking').length;

  return (
    <div className="flex items-center gap-6 text-sm flex-wrap">
      <span className="text-gd-muted">
        <span className="font-semibold text-white">{total}</span> songs found
      </span>
      {whitelisted > 0 && (
        <span className="flex items-center gap-1.5 text-gd-green font-medium">
          <span className="w-2 h-2 rounded-full bg-gd-green" />
          {whitelisted} whitelisted
        </span>
      )}
      {notWhitelisted > 0 && (
        <span className="flex items-center gap-1.5 text-red-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-red-400" />
          {notWhitelisted} not whitelisted
        </span>
      )}
      {checking > 0 && (
        <span className="flex items-center gap-1.5 text-yellow-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          {checking} checking…
        </span>
      )}
    </div>
  );
}
