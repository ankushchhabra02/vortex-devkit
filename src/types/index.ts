export * from './ai';
export * from './async';
export * from './hooks';

// Shared base types
export type AnyFunction = (...args: any[]) => any;
export type Dict<T = any> = Record<string, T>;
export type Nullable<T> = T | null;
export type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (...args: any) => Promise<infer R> ? R : any;
