/**
 * Standard assertion utility for type narrowing.
 * Throws an error if the condition is falsy.
 * 
 * @example
 * assert(user != null, "User must not be null");
 */
export function assert(condition: any, message?: string): asserts condition {
  if (!condition) {
    throw new Error(message || "Assertion failed");
  }
}
