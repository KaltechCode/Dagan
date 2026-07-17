interface ProductTabPanelProps {
  active: boolean;

  children: React.ReactNode;
}

export default function ProductTabPanel({
  active,
  children,
}: ProductTabPanelProps) {
  if (!active) {
    return null;
  }

  return <div className="py-8">{children}</div>;
}
