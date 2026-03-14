/**
 * Formats a generic object as beautifully indented JSON.
 * Ideal for logging complex nested objects during development.
 * 
 * @param obj - The object to stringify.
 * @param spacing - The number of tabs/spaces to use for indentation (default = 2).
 */
export function prettyJSON(obj: unknown, spacing: number = 2): string {
  try {
    return JSON.stringify(obj, null, spacing);
  } catch (error) {
    return String(obj);
  }
}
