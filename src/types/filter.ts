export interface FilterOption {
  label: string;

  value: string;

  count?: number;
}

export interface FilterSectionData {
  title: string;

  queryKey: string;

  multiple?: boolean;

  options: FilterOption[];
}
