import { useMemo, useRef, useState } from "react";

import { useClickOutside } from "@/hooks";

import { SelectOption } from "./select.types";

const [open, setOpen] = useState(false);

const [search, setSearch] = useState("");

const [highlightedIndex, setHighlightedIndex] = useState(0);

const ref = useRef<HTMLDivElement>(null);

useClickOutside(ref, () => setOpen(false), open);

const filteredOptions = useMemo() => {
  if (!search) return options;

  return options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase()),
  );
}, [options, search]);
