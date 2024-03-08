/**
 * The sorting function to use when the generation of value used for comparing
 * each entry is expensive.
 *
 * @param array The array to sort
 * @param identityFunction The function used to generate the value used for
 *   comparing
 * @param compareFunction The compare function to use for sorting
 * @returns A new array with sorted values
 */
export function arrayExpensiveSort<V, I = unknown>(
  array: V[],
  identityFunction: (value: V, index: number, array: V[]) => I,
  compareFunction?: (valueA: readonly [I, V], valueB: readonly [I, V]) => number
): V[] {
  const identityArray = array.map(
    (value, index, array) =>
      [identityFunction(value, index, array), value] as const
  );

  compareFunction ??= ([identityA], [identityB]) =>
    identityA > identityB ? 1 : identityA < identityB ? -1 : 0;

  return identityArray.sort(compareFunction).map(([, value]) => value);
}
