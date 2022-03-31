import RangeError from '#primordials/RangeError';

const ThrowInvalidCharacterError = index => {
  throw new RangeError(`Invalid ASCII character at index ${index}`);
}

export default ThrowInvalidCharacterError;
