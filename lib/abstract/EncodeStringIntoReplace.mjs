import StringCharCodeAt from '#primordials/StringCharCodeAt';
import TypedArrayLength from '#primordials/TypedArrayLength';

const EncodeStringIntoReplace = (string, destination) => {
  const length = string.length;
  const destinationLength = TypedArrayLength(destination);
  let index = 0;
  while (index < length && index < destinationLength) {
    const charCode = StringCharCodeAt(string, index);
    destination[index++] = charCode > 0x7f ? 0x3f : charCode;
  }
  return {
    read: index,
    written: index
  };
}

export default EncodeStringIntoReplace;
