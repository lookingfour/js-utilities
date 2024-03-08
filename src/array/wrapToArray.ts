export interface WrapToArrayOptions {
  /**
   * Determine whether to return a shallow copy of the array if it is already an
   * array.
   *
   * @default false
   */
  newArray?: undefined | boolean;
  /**
   * Determine whether to return empty array if given value is null.
   *
   * @default false
   */
  returnEmptyOnNull?: undefined | boolean;
  /**
   * Determine whether to return empty array if given value is undefined.
   *
   * @default false
   */
  returnEmptyOnUndefined?: undefined | boolean;
}

/**
 * Wraps the given value inside an array.
 *
 * @param value The value to wrap
 * @param options Additional options to consider
 */
export function wrapToArray<V>(
  value: V | V[],
  options: undefined | WrapToArrayOptions = {}
): V[] {
  const {
    newArray = false,
    returnEmptyOnNull = false,
    returnEmptyOnUndefined = false,
  } = options;

  if (Array.isArray(value)) {
    return newArray ? value.slice() : value;
  }

  if (
    (value === null && returnEmptyOnNull) ||
    (typeof value === "undefined" && returnEmptyOnUndefined)
  ) {
    return [];
  }

  return [value];
}
