export interface ReduceNumberUsingSuffixOptions
  extends Pick<
    Intl.NumberFormatOptions,
    | "maximumFractionDigits"
    | "minimumFractionDigits"
    | "minimumIntegerDigits"
    | "maximumSignificantDigits"
    | "minimumSignificantDigits"
  > {
  /**
   * The default value return if formatting fails.
   *
   * @default "N/A"
   */
  defaultValue?: undefined | string;
  /**
   * The locale to use for formatting. Will use the system locale if
   * `undefined`.
   *
   * @default undefined
   */
  locale?: undefined | string;
}

/**
 * Reduce the given number to a format using suffixes.
 *
 * @param number The number to convert
 * @returns The formatted number as string, or the default value if we failed to
 *   parse the number
 */
export function reduceNumberUsingSuffix(
  number: bigint | number,
  options: undefined | ReduceNumberUsingSuffixOptions = {}
): string {
  const {
    defaultValue = "N/A",
    locale = undefined,
    ...formatterOptions
  } = options;

  const formatter = new Intl.NumberFormat(locale, formatterOptions);
  const result = formatter.format(number);

  return result === "NaN" ? defaultValue : result;
}
