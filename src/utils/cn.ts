import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes, resolving conflicts safely.
 * Combines `clsx` and `tailwind-merge`.
 * 
 * @example
 * cn("px-2 py-1 bg-red-500", "bg-blue-500", condition && "text-white")
 * // Returns: "px-2 py-1 bg-blue-500 text-white"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
