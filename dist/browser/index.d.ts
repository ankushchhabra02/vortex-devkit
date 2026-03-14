/**
 * Copies a string to the user's clipboard using the modern Clipboard API
 * with a safe fallback for older browsers.
 *
 * @param text - The text to copy.
 * @returns A promise resolving to true if successful, false otherwise.
 */
declare function copyToClipboard(text: string): Promise<boolean>;

type DeviceType = 'mobile' | 'tablet' | 'desktop' | 'unknown';
/**
 * Heuristically detects the user's device type based on window.navigator.userAgent.
 * For true responsiveness, CSS media queries are always preferred.
 *
 * @returns 'mobile', 'tablet', 'desktop', or 'unknown' (if SSR)
 */
declare function getDeviceType(): DeviceType;

/**
 * Triggers a file download in the browser natively.
 *
 * @param content - The string or Blob content to download.
 * @param filename - The name of the file to save.
 * @param mimeType - Optional explicit mime type (defaults to text/plain).
 */
declare function downloadFile(content: string | Blob, filename: string, mimeType?: string): void;

export { type DeviceType, copyToClipboard, downloadFile, getDeviceType };
