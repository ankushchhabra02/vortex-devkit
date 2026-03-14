/**
 * Wraps a promise in a timeout limit. Rejects if the `promise` takes longer 
 * than `ms` milliseconds to resolve.
 * 
 * @param promise - The long-running asynchronous operation.
 * @param ms - Timeout limit in milliseconds.
 * @param errorMessage - Optional custom error message when rejecting.
 */
export function timeoutPromise<T>(promise: Promise<T>, ms: number, errorMessage = "Operation timed out"): Promise<T> {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error(errorMessage));
    }, ms);

    promise
      .then((res) => {
        clearTimeout(timeoutId);
        resolve(res);
      })
      .catch((err) => {
        clearTimeout(timeoutId);
        reject(err);
      });
  });
}
