import type { ArrayOperationOptions } from "./types.js";

/**
 * Add the given value if it not yet in the given array.
 *
 * @param array The array where to add the given value
 * @param value The value to add
 * @param options The additional options used for the final result
 * @returns The array with the given value
 */
export function addValueIfMissingInArray<V>(
  array: V[],
  value: V,
  options: undefined | Pick<ArrayOperationOptions, "mutate"> = {}
): V[] {
  const { mutate = false } = options;

  array = mutate ? array : array.slice();
  if (!array.includes(value)) array.push(value);

  return array;
}

/**
 * Add the given value if the given finder function does not find anything.
 *
 * @param array The array where to add the given value
 * @param finder The function used to find something
 * @param value The value to add
 * @param options The additional options used for the final result
 * @returns The array with the given value
 */
export const addValueIfMissingInArrayUsingFinder = <V>(
  array: V[],
  finder: (value: V, index: number, array: V[]) => unknown,
  value: V,
  options: undefined | Pick<ArrayOperationOptions, "mutate"> = {}
): V[] => {
  const { mutate = false } = options;

  array = mutate ? array : array.slice(0);
  if (array.findIndex(finder) < 0) array.push(value);

  return array;
};
