/**
 * Checks if the array has something in it.
 *
 * @param array The array to check
 */
export function isArrayNotEmpty<V>(array: V[]): array is [V, ...V[]] {
  return array.length > 0;
}
