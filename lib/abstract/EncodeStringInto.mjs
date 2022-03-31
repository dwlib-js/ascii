import StringCharCodeAt from '#primordials/StringCharCodeAt';
import TypedArrayLength from '#primordials/TypedArrayLength';

const EncodeStringInto = (string, destination) => {
  const length = string.length;
  const destinationLength = TypedArrayLength(destination);
  let index = 0;
  while (index < length && index < destinationLength) {
    const charCode = StringCharCodeAt(string, index);
    destination[index] = charCode & 0xff;
    index++;
  }
  return index;
}

export default EncodeStringInto;
