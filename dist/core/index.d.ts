/**
 * Safely checks if the code is running in a browser environment.
 * Useful for Next.js / SSR compatibility.
 */
declare const isBrowser: boolean;

/**
 * Standard assertion utility for type narrowing.
 * Throws an error if the condition is falsy.
 *
 * @example
 * assert(user != null, "User must not be null");
 */
declare function assert(condition: any, message?: string): asserts condition;

export { assert, isBrowser };
