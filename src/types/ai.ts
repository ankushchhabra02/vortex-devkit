export interface StreamTextOptions {
  /** Time (ms) to wait before closing an inactive stream */
  timeout?: number;
}

export type ChunkTextStrategy = 'word-boundary' | 'strict-character';
