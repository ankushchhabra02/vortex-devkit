/**
 * Safely checks if the code is running in a browser environment.
 * Useful for Next.js / SSR compatibility.
 */
export const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
