abstract class BaseValue<T> {
  protected _value: T;
  protected _errors: string[];

  constructor(args: T) {
    this._value = args;
    this._errors= [];
  }

  abstract get value(): any;
  abstract isValid(): boolean;
  abstract get errors(): typeof this._errors
}

export { BaseValue };