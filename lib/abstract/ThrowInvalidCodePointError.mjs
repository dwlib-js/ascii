import RangeError from '#primordials/RangeError';

const ThrowInvalidCodePointError = index => {
  throw new RangeError(`Invalid ASCII code point at index ${index}`);
}

export default ThrowInvalidCodePointError;
