import StringCharCodeAt from '#primordials/StringCharCodeAt';
import Uint8Array from '#primordials/Uint8Array';

const EncodeString = string => {
  const length = string.length;
  const bytes = new Uint8Array(length);
  for (let i = 0; i < length; i++) {
    const charCode = StringCharCodeAt(string, i);
    bytes[i] = charCode & 0xff;
  }
  return bytes;
}

export default EncodeString;
