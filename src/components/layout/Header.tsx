import gdLogo from '@/assets/gd-logo.png';

export default function Header() {
  return (
    <header className="relative z-10 border-b border-white/10 bg-gd-surface/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center gap-4">
        <img src={gdLogo} alt="GD Logo" className="w-10 h-10 rounded-lg ring-1 ring-gd-primary/50" />
        <div>
          <h1 className="text-xl font-bold text-white leading-tight tracking-wide">
            GD Song Finder
          </h1>
          <p className="text-xs text-gd-muted leading-none mt-0.5">
            Newgrounds × Geometry Dash Whitelist
          </p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-gd-green/15 border border-gd-green/30 px-3 py-1 text-xs font-medium text-gd-green">
            <span className="w-1.5 h-1.5 rounded-full bg-gd-green animate-pulse" />
            GD Whitelist Active
          </span>
        </div>
      </div>
    </header>
  );
}
