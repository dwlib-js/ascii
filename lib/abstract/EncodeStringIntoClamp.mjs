import StringCharCodeAt from '#primordials/StringCharCodeAt';
import TypedArrayLength from '#primordials/TypedArrayLength';

const EncodeStringIntoClamp = (string, destination) => {
  const length = string.length;
  const destinationLength = TypedArrayLength(destination);
  let index = 0;
  let destinationIndex = 0;
  while (index < length && destinationIndex < destinationLength) {
    const charCode = StringCharCodeAt(string, index++);
    destination[destinationIndex++] = charCode & 0x7f;
  }
  return {
    read: index,
    written: destinationIndex
  };
}

export default EncodeStringIntoClamp;
