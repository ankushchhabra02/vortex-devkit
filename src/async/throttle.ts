/**
 * Creates a throttled function that only invokes the provided function 
 * at most once per every `wait` milliseconds.
 * 
 * @param fn - The function to throttle.
 * @param limit - Time limit in milliseconds.
 */
export function throttle<T extends (...args: any[]) => void>(fn: T, limit: number): T {
  let lastRan: number | null = null;
  let lastArgs: Parameters<T> | null = null;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: Parameters<T>) {
    if (!lastRan) {
      fn.apply(this, args);
      lastRan = Date.now();
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      
      lastArgs = args;
      timeoutId = setTimeout(() => {
        if (Date.now() - (lastRan as number) >= limit) {
          fn.apply(this, lastArgs!);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  } as T;
}
