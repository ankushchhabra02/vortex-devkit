/**
 * Splits a large body of text into smaller chunks based on a maximum length.
 * Tries to avoid breaking words where possible.
 * 
 * @param text - The full text to chunk.
 * @param maxLength - Maximum character length per chunk.
 */
export function chunkText(text: string, maxLength: number): string[] {
  if (!text) return [];
  
  const chunks: string[] = [];
  let currentChunk = '';
  
  const words = text.split(/(?<=\s+)/); // Split keeping whitespace

  for (const word of words) {
    if ((currentChunk + word).length > maxLength) {
      if (currentChunk) chunks.push(currentChunk.trim());
      currentChunk = word;
    } else {
      currentChunk += word;
    }
  }

  if (currentChunk) chunks.push(currentChunk.trim());
  
  return chunks;
}
