export { assert, isBrowser } from './core/index.js';
export { useClickOutside, useLocalStorage, useTypewriter } from './hooks/index.js';
export { SafeParseResult, cn, logger, prettyJSON, safeParseJSON, timeAgo } from './utils/index.js';
export { debounce, retry, sleep, throttle, timeoutPromise } from './async/index.js';
export { chunkText, estimateTokens, streamText } from './ai/index.js';
export { DeviceType, copyToClipboard, downloadFile, getDeviceType } from './browser/index.js';
import 'react';
import 'clsx';

interface StreamTextOptions {
    /** Time (ms) to wait before closing an inactive stream */
    timeout?: number;
}
type ChunkTextStrategy = 'word-boundary' | 'strict-character';

type AsyncFunction<T = any> = (...args: any[]) => Promise<T>;
interface RetryOptions {
    retries?: number;
    delay?: number;
}

interface TypewriterOptions {
    speed?: number;
    delay?: number;
}
type SetValueAction<T> = T | ((val: T) => T);

type AnyFunction = (...args: any[]) => any;
type Dict<T = any> = Record<string, T>;
type Nullable<T> = T | null;
type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (...args: any) => Promise<infer R> ? R : any;

export type { AnyFunction, AsyncFunction, AsyncReturnType, ChunkTextStrategy, Dict, Nullable, RetryOptions, SetValueAction, StreamTextOptions, TypewriterOptions };
