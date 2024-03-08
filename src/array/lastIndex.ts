/**
 * Find the last index of the entry that matches the given finder function.
 *
 * @param array The array to search
 * @param finder The function used to find the entry index
 * @returns The last index, or -1 if not found
 */
export function arrayFindLastIndex<V>(
  array: V[],
  finder: (value: V, index: number, array: V[]) => unknown
): number {
  for (let index = array.length - 1; index >= 0; --index) {
    if (finder(array[index] as V, index, array)) return index;
  }

  return -1;
}
