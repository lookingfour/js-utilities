/** The type used to pick out required and optional keys from the given type. */
export type PickRequiredOptional<
  Data,
  RequiredKeys extends keyof Data,
  OptionalKeys extends Exclude<keyof Data, RequiredKeys> = Exclude<
    keyof Data,
    RequiredKeys
  >,
> = Required<Pick<Data, RequiredKeys>> & Partial<Pick<Data, OptionalKeys>>;
