export interface ApiResponse<T> {
  success: boolean;

  data: T;

  message?: string;
}

export interface Pagination {
  page: number;

  perPage: number;

  totalItems: number;

  totalPages: number;

  hasNext: boolean;

  hasPrevious: boolean;
}

export interface Collection<T> {
  items: T[];

  pagination: Pagination;
}
