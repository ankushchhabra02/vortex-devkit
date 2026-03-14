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
export async function* streamText(response: Response | ReadableStream<Uint8Array>) {
  const stream = 'body' in response ? response.body : response;
  
  if (!stream) {
    throw new Error('No stream found in the response.');
  }

  const reader = stream.getReader();
  const decoder = new TextDecoder('utf-8');

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      yield decoder.decode(value, { stream: true });
    }
  } finally {
    reader.releaseLock();
  }
}
