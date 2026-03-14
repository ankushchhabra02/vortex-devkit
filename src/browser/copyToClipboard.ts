/**
 * Copies a string to the user's clipboard using the modern Clipboard API
 * with a safe fallback for older browsers.
 * 
 * @param text - The text to copy.
 * @returns A promise resolving to true if successful, false otherwise.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (!navigator?.clipboard) {
    // Fallback for older browsers
    try {
      const el = document.createElement('textarea');
      el.value = text;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      return true;
    } catch (e) {
      console.error('Clipboard copy fallback failed', e);
      return false;
    }
  }

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (e) {
    console.error('Clipboard API copy failed', e);
    return false;
  }
}
