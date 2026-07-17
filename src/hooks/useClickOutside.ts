import { RefObject, useEffect } from "react";

type EventType = MouseEvent | TouchEvent;

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: EventType) => void,
  enabled = true,
) {
  useEffect(() => {
    if (!enabled) return;

    function listener(event: EventType) {
      const element = ref.current;

      if (!element) return;

      if (element.contains(event.target as Node)) {
        return;
      }

      handler(event);
    }

    document.addEventListener("mousedown", listener);

    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);

      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, enabled]);
}
