import StringCharCodeAt from '#primordials/StringCharCodeAt';
import ThrowInvalidCharacterError from './ThrowInvalidCharacterError.mjs';

const ValidateString = string => {
  const length = string.length;
  for (let i = 0; i < length; i++) {
    const charCode = StringCharCodeAt(string, i);
    if (charCode > 0x7f) {
      ThrowInvalidCharacterError(i);
    }
  }
  return string;
}

export default ValidateString;
