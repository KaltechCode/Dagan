import ColorSwatch from "./ColorSwatch";
import SizeOption from "./SizeOption";
import VariantOption from "./VariantsOption";

interface Props {
  name: string;

  slug: string;

  options: string[];

  selectedValue?: string;

  availableOptions: string[];

  onSelect(slug: string, value: string): void;
}

export default function AttributeGroup({
  name,
  slug,
  options,
  selectedValue,
  availableOptions,
  onSelect,
}: Props) {
  const isColor = slug === "pa_color";

  return (
    <div className="space-y-3">
      <h3 className="font-medium">{name}</h3>

      <div className="flex flex-wrap gap-3">
        {options.map((option) => {
          const disabled = !availableOptions.includes(option);

          if (isColor) {
            return (
              <ColorSwatch
                key={option}
                color={option}
                selected={selectedValue === option}
                disabled={disabled}
                onClick={() => onSelect(slug, option)}
              />
            );
          }

          if (slug === "pa_size") {
            return (
              <SizeOption
                key={option}
                size={option}
                selected={selectedValue === option}
                disabled={disabled}
                onClick={() => onSelect(slug, option)}
              />
            );
          }

          return (
            <VariantOption
              key={option}
              label={option}
              selected={selectedValue === option}
              disabled={disabled}
              onClick={() => onSelect(slug, option)}
            />
          );
        })}
      </div>
    </div>
  );
}
