import StringCharCodeAt from '#primordials/StringCharCodeAt';
import TypedArrayLength from '#primordials/TypedArrayLength';

const EncodeStringIntoIgnore = (string, destination) => {
  const length = string.length;
  const destinationLength = TypedArrayLength(destination);
  let index = 0;
  let destinationIndex = 0;
  while (index < length && destinationIndex < destinationLength) {
    const charCode = StringCharCodeAt(string, index++);
    if (charCode > 0x7f) {
      continue;
    }
    destination[destinationIndex++] = charCode;
  }
  return {
    read: index,
    written: destinationIndex
  };
}

export default EncodeStringIntoIgnore;
