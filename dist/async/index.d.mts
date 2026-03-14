/**
 * Retries an asynchronous function a specified number of times before failing.
 *
 * @param fn - The async function to execute.
 * @param retries - Number of retry attempts (default 3).
 * @param delay - Delay in milliseconds between retries (default 1000).
 */
declare function retry<T>(fn: () => Promise<T>, retries?: number, delay?: number): Promise<T>;

/**
 * Pauses asynchronous execution for the specified time.
 *
 * @param ms - The number of milliseconds to sleep for.
 */
declare function sleep(ms: number): Promise<void>;

/**
 * Creates a debounced function that delays invoking the provided function
 * until after `wait` milliseconds have elapsed since the last time it was invoked.
 *
 * @param fn - The function to debounce.
 * @param wait - The number of milliseconds to delay.
 */
declare function debounce<T extends (...args: any[]) => void>(fn: T, wait: number): T;

/**
 * Creates a throttled function that only invokes the provided function
 * at most once per every `wait` milliseconds.
 *
 * @param fn - The function to throttle.
 * @param limit - Time limit in milliseconds.
 */
declare function throttle<T extends (...args: any[]) => void>(fn: T, limit: number): T;

/**
 * Wraps a promise in a timeout limit. Rejects if the `promise` takes longer
 * than `ms` milliseconds to resolve.
 *
 * @param promise - The long-running asynchronous operation.
 * @param ms - Timeout limit in milliseconds.
 * @param errorMessage - Optional custom error message when rejecting.
 */
declare function timeoutPromise<T>(promise: Promise<T>, ms: number, errorMessage?: string): Promise<T>;

export { debounce, retry, sleep, throttle, timeoutPromise };
