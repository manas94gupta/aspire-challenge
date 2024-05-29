import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Merge tailwind with twMerge utility to avoid any cascading issues
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function maskString(
  original: string,
  count: number,
  maskChar: string = '•'
): string {
  if (!original) {
    return original; // Return as is if the original string is empty or null
  }
  if (count < 0) {
    throw new Error('Count cannot be negative');
  }
  if (count > original.length) {
    count = original.length; // Mask the entire string if count exceeds the length of the original string
  }

  const maskedPart = maskChar.repeat(count);
  const unmaskedPart = original.slice(count);
  return maskedPart + unmaskedPart;
}

export function splitString(input: string, separator: string = ''): string[] {
  return input.split(separator);
}
