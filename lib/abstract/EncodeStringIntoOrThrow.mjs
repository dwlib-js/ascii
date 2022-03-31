import StringCharCodeAt from '#primordials/StringCharCodeAt';
import TypedArrayLength from '#primordials/TypedArrayLength';
import ThrowInvalidCharacterError from './ThrowInvalidCharacterError.mjs';

const EncodeStringIntoOrThrow = (string, destination) => {
  const length = string.length;
  const destinationLength = TypedArrayLength(destination);
  let index = 0;
  while (index < length && index < destinationLength) {
    const charCode = StringCharCodeAt(string, index);
    if (charCode > 0xff) {
      ThrowInvalidCharacterError(index);
    }
    destination[index] = charCode;
    index++;
  }
  return index;
}

export default EncodeStringIntoOrThrow;
