import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Builds a space-separated class string from mixed inputs and resolves Tailwind class conflicts.
 *
 * @param inputs - One or more `ClassValue` entries (strings, arrays, objects) to combine into classes.
 * @returns The resulting merged and normalized class string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}