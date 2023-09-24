import { RefObject, useEffect } from "react";
import { isMobile } from "..";

const useOnClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const typeEvent = isMobile() ? `touchstart` : `mousedown`;
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener(typeEvent, listener);

    return () => {
      document.removeEventListener(typeEvent, listener);
    };
  }, [ref, handler]);
};
export { useOnClickOutside };
