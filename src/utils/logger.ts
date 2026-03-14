import { isBrowser } from '../core/isBrowser';

const COLORS = {
  reset: '\x1b[0m',
  info: '\x1b[36m', // Cyan
  success: '\x1b[32m', // Green
  warn: '\x1b[33m', // Yellow
  error: '\x1b[31m', // Red
};

/**
 * Beautiful, categorized terminal logger. Uses ANSI escapes in Node,
 * and standard console methods in the browser.
 */
export const logger = {
  info: (message: string, ...args: any[]) => {
    if (isBrowser) console.info(`🔵 [INFO]: ${message}`, ...args);
    else console.log(`${COLORS.info}[INFO]${COLORS.reset} - ${new Date().toLocaleTimeString()} - ${message}`, ...args);
  },
  success: (message: string, ...args: any[]) => {
    if (isBrowser) console.log(`🟢 [SUCCESS]: ${message}`, ...args);
    else console.log(`${COLORS.success}[SUCCESS]${COLORS.reset} - ${new Date().toLocaleTimeString()} - ${message}`, ...args);
  },
  warn: (message: string, ...args: any[]) => {
    if (isBrowser) console.warn(`🟠 [WARN]: ${message}`, ...args);
    else console.warn(`${COLORS.warn}[WARN]${COLORS.reset} - ${new Date().toLocaleTimeString()} - ${message}`, ...args);
  },
  error: (message: string, ...args: any[]) => {
    if (isBrowser) console.error(`🔴 [ERROR]: ${message}`, ...args);
    else console.error(`${COLORS.error}[ERROR]${COLORS.reset} - ${new Date().toLocaleTimeString()} - ${message}`, ...args);
  }
};
