/** The helper function interface usually used for finding values in an array. */
export interface ArrayFinderFunction<Value, Result = unknown> {
  (value: Value, index: number, array: Value[]): Result;
}
