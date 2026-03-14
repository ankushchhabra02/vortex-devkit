/**
 * Triggers a file download in the browser natively.
 * 
 * @param content - The string or Blob content to download.
 * @param filename - The name of the file to save.
 * @param mimeType - Optional explicit mime type (defaults to text/plain).
 */
export function downloadFile(
  content: string | Blob, 
  filename: string, 
  mimeType: string = 'text/plain'
): void {
  const blob = typeof content === 'string' 
    ? new Blob([content], { type: mimeType }) 
    : content;

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  
  // Cleanup
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
