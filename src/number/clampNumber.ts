export interface ClampNumberOptions<ValueType extends bigint | number> {
  /** The maximum value allowed if given. */
  max?: undefined | ValueType;
  /** The minimum value allowed if given. */
  min?: undefined | ValueType;
  /**
   * The boundary to check first.
   *
   * @default "min"
   */
  first?: undefined | "max" | "min";
}

/**
 * Clamp the given value to specified range.
 *
 * @param value The value to clamp
 * @param options Contains the min and max values and others options to consider
 */
export function clampNumber(
  value: number,
  options?: undefined | ClampNumberOptions<number>
): number;
/**
 * Clamp the given value to specified range.
 *
 * @param value The value to clamp
 * @param options Contains the min and max values and others options to consider
 */
export function clampNumber(
  value: bigint,
  options?: undefined | ClampNumberOptions<bigint>
): bigint;
export function clampNumber(
  value: bigint | number,
  options: undefined | ClampNumberOptions<bigint | number> = {}
): bigint | number {
  const { first = "min", max, min } = options;

  if (first === "max") {
    if (typeof min !== "undefined" && value < min) value = min;
    if (typeof max !== "undefined" && value > max) value = max;
  } else {
    if (typeof max !== "undefined" && value > max) value = max;
    if (typeof min !== "undefined" && value < min) value = min;
  }

  return value;
}
