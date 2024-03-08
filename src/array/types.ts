export interface ArrayOperationOptions {
  /**
   * Determine whether to mutate the given array or create a new array.
   *
   * @default false
   */
  mutate?: undefined | boolean;

  /**
   * Determine whether to return the original array if the value of interest is
   * not found.
   *
   * @default false
   */
  returnOriginalIfNotFound?: undefined | boolean;
}
