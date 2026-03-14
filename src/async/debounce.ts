/**
 * Creates a debounced function that delays invoking the provided function
 * until after `wait` milliseconds have elapsed since the last time it was invoked.
 * 
 * @param fn - The function to debounce.
 * @param wait - The number of milliseconds to delay.
 */
export function debounce<T extends (...args: any[]) => void>(fn: T, wait: number): T {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: Parameters<T>) {
    if (timeoutId !== null) clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  } as T;
}
