import { NG_GENRES, SORT_OPTIONS, FORMAT_OPTIONS } from '@/constants/genres';
import type { SearchFilters } from '@/types';

interface FilterBarProps {
  filters: SearchFilters;
  onChange: (filters: SearchFilters) => void;
}

const selectClass =
  'rounded-lg border border-white/10 bg-gd-surface text-sm text-white px-3 py-2 outline-none focus:border-gd-primary focus:ring-1 focus:ring-gd-primary/30 transition-colors cursor-pointer hover:border-white/20 appearance-none pr-8';

const labelClass = 'text-xs font-medium text-gd-muted uppercase tracking-wider mb-1 block';

export default function FilterBar({ filters, onChange }: FilterBarProps) {
  const update = (key: keyof SearchFilters, value: string) => {
    onChange({ ...filters, [key]: value });
  };

  return (
    <div className="flex flex-wrap gap-4 items-end">
      {/* Genre */}
      <div className="relative min-w-[180px]">
        <label className={labelClass}>Genre</label>
        <div className="relative">
          <select
            value={filters.genre}
            onChange={(e) => update('genre', e.target.value)}
            className={selectClass}
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center' }}
          >
            {NG_GENRES.map((g) => (
              <option key={g.value} value={g.value} className="bg-gd-bg">
                {g.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Sort */}
      <div className="relative min-w-[140px]">
        <label className={labelClass}>Sort By</label>
        <div className="relative">
          <select
            value={filters.sort}
            onChange={(e) => update('sort', e.target.value as SearchFilters['sort'])}
            className={selectClass}
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center' }}
          >
            {SORT_OPTIONS.map((s) => (
              <option key={s.value} value={s.value} className="bg-gd-bg">
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Format */}
      <div className="relative min-w-[120px]">
        <label className={labelClass}>Format</label>
        <div className="relative">
          <select
            value={filters.format}
            onChange={(e) => update('format', e.target.value as SearchFilters['format'])}
            className={selectClass}
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center' }}
          >
            {FORMAT_OPTIONS.map((f) => (
              <option key={f.value} value={f.value} className="bg-gd-bg">
                {f.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Length Range */}
      <div className="flex items-end gap-2">
        <div>
          <label className={labelClass}>Min (sec)</label>
          <input
            type="number"
            min={0}
            value={filters.minLength}
            onChange={(e) => update('minLength', e.target.value)}
            placeholder="0"
            className="w-20 rounded-lg border border-white/10 bg-gd-surface text-sm text-white px-3 py-2 outline-none focus:border-gd-primary focus:ring-1 focus:ring-gd-primary/30 transition-colors placeholder:text-gd-muted"
          />
        </div>
        <span className="text-gd-muted text-sm mb-2.5">–</span>
        <div>
          <label className={labelClass}>Max (sec)</label>
          <input
            type="number"
            min={0}
            value={filters.maxLength}
            onChange={(e) => update('maxLength', e.target.value)}
            placeholder="∞"
            className="w-20 rounded-lg border border-white/10 bg-gd-surface text-sm text-white px-3 py-2 outline-none focus:border-gd-primary focus:ring-1 focus:ring-gd-primary/30 transition-colors placeholder:text-gd-muted"
          />
        </div>
      </div>
    </div>
  );
}
