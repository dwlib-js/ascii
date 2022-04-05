import StringCharCodeAt from '#primordials/StringCharCodeAt';
import TypedArraySlice from '#primordials/TypedArraySlice';
import Uint8Array from '#primordials/Uint8Array';

const EncodeStringBreak = string => {
  const length = string.length;
  const bytes = new Uint8Array(length);
  let index = 0;
  for (let i = 0; i < length; i++) {
    const charCode = StringCharCodeAt(string, i);
    if (charCode > 0x7f) {
      break;
    }
    bytes[index++] = charCode;
  }
  return index !== length ? TypedArraySlice(bytes, 0, index) : bytes;
}

export default EncodeStringBreak;
