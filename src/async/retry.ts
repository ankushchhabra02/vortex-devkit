/**
 * Retries an asynchronous function a specified number of times before failing.
 * 
 * @param fn - The async function to execute.
 * @param retries - Number of retry attempts (default 3).
 * @param delay - Delay in milliseconds between retries (default 1000).
 */
export async function retry<T>(fn: () => Promise<T>, retries: number = 3, delay: number = 1000): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (retries === 1) throw error;
    await new Promise((res) => setTimeout(res, delay));
    return retry(fn, retries - 1, delay);
  }
}
