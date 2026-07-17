export interface NavigationItem {
  id: number;
  label: string;
  href: string;
  icon?: React.ReactNode;
  external?: boolean;
  children?: NavigationItem[];
}
