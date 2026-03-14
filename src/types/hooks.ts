export interface TypewriterOptions {
  speed?: number;
  delay?: number;
}

export type SetValueAction<T> = T | ((val: T) => T);
