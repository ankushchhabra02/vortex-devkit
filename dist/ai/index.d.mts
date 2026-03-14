/**
 * Splits a large body of text into smaller chunks based on a maximum length.
 * Tries to avoid breaking words where possible.
 *
 * @param text - The full text to chunk.
 * @param maxLength - Maximum character length per chunk.
 */
declare function chunkText(text: string, maxLength: number): string[];

/**
 * Async generator that consumes a ReadableStream (e.g. from an LLM fetch response)
 * and yields decoded text chunks.
 *
 * @param response - The Response object from fetch(), or a ReadableStream.
 * @example
 * const res = await fetch('/api/chat', ...);
 * for await (const chunk of streamText(res)) {
 *   console.log(chunk);
 * }
 */
declare function streamText(response: Response | ReadableStream<Uint8Array>): AsyncGenerator<string, void, unknown>;

/**
 * A fast, heuristic-based token estimator for LLM prompts.
 * This is an approximation (roughly 4 characters = 1 token).
 * For precise counting, use a library like `tiktoken`.
 *
 * @param text - The prompt text to estimate.
 */
declare function estimateTokens(text: string): number;

export { chunkText, estimateTokens, streamText };
