export interface NGSong {
  id: number;
  title: string;
  artist: string;
  artistUrl: string;
  genre: string;
  score: number;
  views: number;
  duration?: number;
  url: string; // NG page URL
  audioUrl?: string;
  thumbnail?: string;
  gdStatus: 'unchecked' | 'checking' | 'whitelisted' | 'not-whitelisted';
}

export interface NGSearchResult {
  songs: NGSong[];
  totalCount: number;
  page: number;
}

export type SortOption = 'relevance' | 'date' | 'score' | 'views';
export type SongFormat = '' | 'song' | 'loop';

export interface SearchFilters {
  query: string;
  genre: string;
  sort: SortOption;
  format: SongFormat;
  minLength: string;
  maxLength: string;
}
