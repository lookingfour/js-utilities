import type { ArrayOperationOptions } from "./types";

/**
 * Removes the given value from the array.
 *
 * @param array The array where to remove the value
 * @param value The value to remove
 * @param options The additional options to use for the final result
 * @returns The array without the removed value
 */
export function removeFromArrayUsingIndex<V>(
  array: V[],
  index: number,
  options:
    | undefined
    | Pick<ArrayOperationOptions, "mutate" | "returnOriginalIfNotFound"> = {}
): V[] {
  const { mutate = false, returnOriginalIfNotFound = false } = options;

  if (index > -1) {
    array = mutate ? array : array.slice(0);
    array.splice(index, 1);

    return array;
  }

  return returnOriginalIfNotFound ? array : array.slice();
}

/**
 * Remove the given value from the array.
 *
 * @param array The array where to remove
 * @param value The value to remove
 * @param options The additional options
 * @returns The array without the removed value
 */
export function removeFromArray<V>(
  array: V[],
  value: V,
  options?:
    | undefined
    | Pick<ArrayOperationOptions, "mutate" | "returnOriginalIfNotFound">
): V[] {
  return removeFromArrayUsingIndex(array, array.indexOf(value), options);
}

/**
 * Remove the first entry that passes the given finder function.
 *
 * @param array The array where to remove
 * @param finder The function used to find the value
 * @param options The additional options
 * @returns The array without the removed value
 */
export function removeFromArrayUsingFinder<V>(
  array: V[],
  finder: (value: V, index: number, original: V[]) => boolean,
  options?:
    | undefined
    | Pick<ArrayOperationOptions, "mutate" | "returnOriginalIfNotFound">
) {
  return removeFromArrayUsingIndex(array, array.findIndex(finder), options);
}
