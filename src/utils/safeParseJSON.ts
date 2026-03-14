export type SafeParseResult<T> = 
  | { success: true; data: T; error: null }
  | { success: false; data: null; error: Error };

/**
 * Safely parses a JSON string, returning a result object instead of throwing.
 * 
 * @param str - The JSON string to parse.
 * @returns An object containing either the parsed `{ data }` or an `{ error }`.
 */
export function safeParseJSON<T = unknown>(str: string): SafeParseResult<T> {
  try {
    const data = JSON.parse(str) as T;
    return { success: true, data, error: null };
  } catch (err) {
    return { 
      success: false, 
      data: null, 
      error: err instanceof Error ? err : new Error(String(err))
    };
  }
}
