/** Same as record but all entries are optional. */
export type PartialRecord<
  Key extends number | string | symbol,
  Value,
  ValueCanBeUndefined extends boolean = true,
> = Partial<
  Record<Key, ValueCanBeUndefined extends true ? undefined | Value : Value>
>;
