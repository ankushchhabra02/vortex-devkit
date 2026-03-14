import { isBrowser } from '../core/isBrowser';

export type DeviceType = 'mobile' | 'tablet' | 'desktop' | 'unknown';

/**
 * Heuristically detects the user's device type based on window.navigator.userAgent.
 * For true responsiveness, CSS media queries are always preferred.
 * 
 * @returns 'mobile', 'tablet', 'desktop', or 'unknown' (if SSR)
 */
export function getDeviceType(): DeviceType {
  if (!isBrowser) return 'unknown';

  const ua = navigator.userAgent;
  
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)
  ) {
    return 'mobile';
  }
  return 'desktop';
}
