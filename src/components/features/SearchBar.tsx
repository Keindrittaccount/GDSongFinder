import { Search, X } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  loading: boolean;
}

export default function SearchBar({ value, onChange, onSearch, loading }: SearchBarProps) {
  const [focused, setFocused] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') onSearch();
  };

  return (
    <div
      className={`relative flex items-center rounded-xl border transition-all duration-200 bg-gd-surface ${
        focused ? 'border-gd-primary shadow-[0_0_0_3px_rgba(59,130,246,0.15)]' : 'border-white/10'
      }`}
    >
      <Search
        className={`ml-4 w-5 h-5 flex-shrink-0 transition-colors ${focused ? 'text-gd-primary' : 'text-gd-muted'}`}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Search songs, artists… e.g. Waterflame, Electroman"
        className="flex-1 bg-transparent px-3 py-4 text-base text-white placeholder:text-gd-muted outline-none"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="mr-2 rounded-md p-1.5 text-gd-muted hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      )}
      <button
        onClick={onSearch}
        disabled={loading}
        className="mr-2 rounded-lg bg-gd-primary hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed px-5 py-2.5 text-sm font-semibold text-white transition-colors"
      >
        {loading ? 'Searching…' : 'Search'}
      </button>
    </div>
  );
}
