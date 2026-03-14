import { ClassValue } from 'clsx';

/**
 * Utility function to merge Tailwind CSS classes, resolving conflicts safely.
 * Combines `clsx` and `tailwind-merge`.
 *
 * @example
 * cn("px-2 py-1 bg-red-500", "bg-blue-500", condition && "text-white")
 * // Returns: "px-2 py-1 bg-blue-500 text-white"
 */
declare function cn(...inputs: ClassValue[]): string;

/**
 * Beautiful, categorized terminal logger. Uses ANSI escapes in Node,
 * and standard console methods in the browser.
 */
declare const logger: {
    info: (message: string, ...args: any[]) => void;
    success: (message: string, ...args: any[]) => void;
    warn: (message: string, ...args: any[]) => void;
    error: (message: string, ...args: any[]) => void;
};

/**
 * Converts a Date object or timestamp into a human-readable relative time string.
 * Example: "Just now", "5 minutes ago", "2 hours ago"
 *
 * @param date - The Date object or timestamp to format.
 */
declare function timeAgo(date: Date | number | string): string;

type SafeParseResult<T> = {
    success: true;
    data: T;
    error: null;
} | {
    success: false;
    data: null;
    error: Error;
};
/**
 * Safely parses a JSON string, returning a result object instead of throwing.
 *
 * @param str - The JSON string to parse.
 * @returns An object containing either the parsed `{ data }` or an `{ error }`.
 */
declare function safeParseJSON<T = unknown>(str: string): SafeParseResult<T>;

/**
 * Formats a generic object as beautifully indented JSON.
 * Ideal for logging complex nested objects during development.
 *
 * @param obj - The object to stringify.
 * @param spacing - The number of tabs/spaces to use for indentation (default = 2).
 */
declare function prettyJSON(obj: unknown, spacing?: number): string;

export { type SafeParseResult, cn, logger, prettyJSON, safeParseJSON, timeAgo };
