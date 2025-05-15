import type { ArrayOperationOptions } from "./types.js";

/**
 * Remove and replace the value on the given index.
 *
 * @param array The array where to remove and replace
 * @param index The index where to remove and replace
 * @param replaceValue The value used for replacement
 * @param options The additional options to use for modifying the final results
 * @returns The array with replaced value
 */
export function replaceEntryOnArrayUsingIndex<V>(
  array: V[],
  index: number,
  replaceValue: V,
  options:
    | undefined
    | Pick<ArrayOperationOptions, "mutate" | "returnOriginalIfNotFound"> = {}
): V[] {
  const { mutate = false, returnOriginalIfNotFound = false } = options;

  if (index > -1) {
    array = mutate ? array : array.slice();
    array.splice(index, 1, replaceValue);
    return array;
  }

  return returnOriginalIfNotFound ? array : array.slice();
}

/**
 * Remove and replace the given search value with the given replace value.
 *
 * @param array The array where to find the value and replace it
 * @param searchValue The value to find and replace
 * @param replaceValue The value used for replacement
 * @param options The additional options to use for the final result
 * @returns The array with replaced value
 */
export function replaceEntryOnArray<V>(
  array: V[],
  searchValue: V,
  replaceValue: V,
  options?:
    | undefined
    | Pick<ArrayOperationOptions, "mutate" | "returnOriginalIfNotFound">
): V[] {
  return replaceEntryOnArrayUsingIndex(
    array,
    array.indexOf(searchValue),
    replaceValue,
    options
  );
}

/**
 * Removes and replace the value found by the finder function with given replace
 * value.
 *
 * @param array The array where to find the value and replace it
 * @param finder The function used to find the value to replace
 * @param replaceValue The value used for replacement
 * @param options The additional options to use for the final result
 * @returns The array with replaced value
 */
export function replaceEntryOnArrayUsingFinder<V>(
  array: V[],
  finder: (value: V, index: number, original: V[]) => unknown,
  replaceValue: V,
  options?:
    | undefined
    | Pick<ArrayOperationOptions, "mutate" | "returnOriginalIfNotFound">
): V[] {
  return replaceEntryOnArrayUsingIndex(
    array,
    array.findIndex(finder),
    replaceValue,
    options
  );
}
