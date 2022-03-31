import StringCharCodeAt from '#primordials/StringCharCodeAt';
import Uint8Array from '#primordials/Uint8Array';
import ThrowInvalidCharacterError from './ThrowInvalidCharacterError.mjs';

const EncodeStringOrThrow = string => {
  const length = string.length;
  const bytes = new Uint8Array(length);
  for (let i = 0; i < length; i++) {
    const charCode = StringCharCodeAt(string, i);
    if (charCode > 0xff) {
      ThrowInvalidCharacterError(i);
    }
    bytes[i] = charCode;
  }
  return bytes;
}

export default EncodeStringOrThrow;
