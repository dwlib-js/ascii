import StringCharCodeAt from '#primordials/StringCharCodeAt';
import TypedArrayLength from '#primordials/TypedArrayLength';
import ThrowInvalidCharacterError from './ThrowInvalidCharacterError.mjs';

const EncodeStringIntoStrict = (string, destination) => {
  const length = string.length;
  const destinationLength = TypedArrayLength(destination);
  let index = 0;
  let destinationIndex = 0;
  while (index < length && destinationIndex < destinationLength) {
    const charCode = StringCharCodeAt(string, index);
    if (charCode > 0x7f) {
      ThrowInvalidCharacterError(index);
    }
    destination[destinationIndex++] = charCode;
    index++;
  }
  return {
    read: index,
    written: destinationIndex
  };
}

export default EncodeStringIntoStrict;
