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

export function capitalizeString(input: string): string {
  return input
    .split(' ')
    .map((word) => {
      if (word.length > 0) {
        return word[0].toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    })
    .join(' ');
}

export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
