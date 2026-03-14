import { RefObject } from 'react';

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
declare function useClickOutside<T extends HTMLElement = HTMLElement>(ref: RefObject<T | null>, handler: (event: MouseEvent | TouchEvent) => void): void;

interface UseTypewriterOptions {
    speed?: number;
    delay?: number;
}
/**
 * A hook to simulate a typewriter effect, useful for AI chat applications.
 *
 * @param text - The full text to type out.
 * @param options - Configure typing speed (ms) and initial delay (ms).
 * @returns The currently revealed portion of the text.
 */
declare function useTypewriter(text: string, options?: UseTypewriterOptions): string;

/**
 * Hook to read and write values to localStorage.
 * Automatically parses JSON and handles stringification.
 *
 * @param key - The localStorage key.
 * @param initialValue - The fallback value if none exists.
 */
declare function useLocalStorage<T>(key: string, initialValue: T): readonly [T, (value: T | ((val: T) => T)) => void];

export { useClickOutside, useLocalStorage, useTypewriter };
