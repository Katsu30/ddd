import { BaseValue } from './base';

class FirstName extends BaseValue<string> {
  get value() {
    return this._value;
  }

  isValid() {
    const value = this._value;

    if (typeof value === 'string') {
      this.errors.push('must be string');
    }

    if (value.length === 0) {
      this.errors.push('cannot be empty');
    }

    if (value.length >= 20) {
      this.errors.push('too long')
    }

    return true;
  }

  get errors() {
    return this._errors;
  }
}

export { FirstName }