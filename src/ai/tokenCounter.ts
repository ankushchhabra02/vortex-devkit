/**
 * A fast, heuristic-based token estimator for LLM prompts.
 * This is an approximation (roughly 4 characters = 1 token).
 * For precise counting, use a library like `tiktoken`.
 * 
 * @param text - The prompt text to estimate.
 */
export function estimateTokens(text: string): number {
  if (!text) return 0;
  // A standard rule of thumb is 1 token ~= 4 chars in English
  // Or ~0.75 words.
  const charCount = text.length;
  const wordCount = text.split(/\s+/).length;
  
  return Math.max(Math.ceil(charCount / 4), Math.ceil(wordCount / 0.75));
}
