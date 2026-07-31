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

  return <div className="pt-5 pb-4">{children}</div>;
}
