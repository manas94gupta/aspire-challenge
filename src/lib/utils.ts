import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Merge tailwind with twMerge utility to avoid any cascading issues
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
