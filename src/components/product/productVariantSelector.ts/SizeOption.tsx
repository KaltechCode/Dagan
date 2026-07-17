import VariantOption from "./VariantsOption";

interface Props {
  size: string;

  selected: boolean;

  disabled?: boolean;

  onClick(): void;
}

export default function SizeOption(props: Props) {
  return (
    <VariantOption
      label={props.size}
      selected={props.selected}
      disabled={props.disabled}
      onClick={props.onClick}
    />
  );
}
