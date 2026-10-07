import { Music, SearchX } from 'lucide-react';

interface EmptyStateProps {
  type: 'idle' | 'no-results' | 'error';
  errorMsg?: string;
  // errorMsg is also used on no-results to show contextual help
}

export default function EmptyState({ type, errorMsg }: EmptyStateProps) {
  if (type === 'idle') {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-20 h-20 rounded-2xl bg-gd-primary/10 border border-gd-primary/20 flex items-center justify-center mb-5">
          <Music className="w-9 h-9 text-gd-primary" />
        </div>
        <h2 className="text-lg font-semibold text-white mb-2">Search Newgrounds Audio</h2>
        <p className="text-sm text-gd-muted max-w-sm leading-relaxed">
          Search Newgrounds songs directly — results are automatically verified against the GD whitelist.
          Or use <span className="text-white font-medium">Check by ID</span> to verify any specific song ID.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {['Waterflame', 'F-777', 'DJVI', 'MDK', 'Xtrullor', 'Camellia'].map((a) => (
            <span
              key={a}
              className="text-xs px-3 py-1 rounded-full bg-gd-surface border border-white/8 text-gd-muted"
            >
              {a}
            </span>
          ))}
        </div>
        <p className="text-xs text-gd-muted mt-3">Popular GD-whitelisted artists</p>
      </div>
    );
  }

  if (type === 'no-results') {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
          <SearchX className="w-9 h-9 text-gd-muted" />
        </div>
        <h2 className="text-lg font-semibold text-white mb-2">No whitelisted songs found</h2>
        <p className="text-sm text-gd-muted max-w-sm">
          {errorMsg || 'Try different keywords, adjust filters, or disable the "GD whitelisted only" toggle to see all results.'}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5">
        <SearchX className="w-9 h-9 text-red-400" />
      </div>
      <h2 className="text-lg font-semibold text-white mb-2">Search failed</h2>
      <p className="text-sm text-gd-muted max-w-sm">
        {errorMsg || 'Could not connect to Newgrounds. Showing known GD songs instead.'}
      </p>
    </div>
  );
}
