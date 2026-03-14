export type AsyncFunction<T = any> = (...args: any[]) => Promise<T>;

export interface RetryOptions {
  retries?: number;
  delay?: number;
}
