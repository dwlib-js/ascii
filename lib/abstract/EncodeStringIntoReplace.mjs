import StringCharCodeAt from '#primordials/StringCharCodeAt';
import TypedArrayLength from '#primordials/TypedArrayLength';

const EncodeStringIntoReplace = (string, destination) => {
  const length = string.length;
  const destinationLength = TypedArrayLength(destination);
  let index = 0;
  let destinationIndex = 0;
  while (index < length && destinationIndex < destinationLength) {
    const charCode = StringCharCodeAt(string, index++);
    destination[destinationIndex++] = charCode > 0x7f ? 0x3f : charCode;
  }
  return {
    read: index,
    written: destinationIndex
  };
}

export default EncodeStringIntoReplace;
