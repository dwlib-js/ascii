import StringCharCodeAt from '#primordials/StringCharCodeAt';
import TypedArrayLength from '#primordials/TypedArrayLength';
import ThrowInvalidCharacterError from './ThrowInvalidCharacterError.mjs';

const EncodeStringIntoStrict = (string, destination) => {
  const length = string.length;
  const destinationLength = TypedArrayLength(destination);
  let index = 0;
  while (index < length && index < destinationLength) {
    const charCode = StringCharCodeAt(string, index);
    if (charCode > 0x7f) {
      ThrowInvalidCharacterError(index);
    }
    destination[index++] = charCode;
  }
  return {
    read: index,
    written: index
  };
}

export default EncodeStringIntoStrict;
