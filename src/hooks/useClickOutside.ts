import { useEffect, RefObject } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref.
 * 
 * @param ref - The React ref to the target element.
 * @param handler - The callback function to execute when a click outside occurs.
 * 
 * @example
 * const ref = useRef(null);
 * useClickOutside(ref, () => setOpen(false));
 */
export function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
