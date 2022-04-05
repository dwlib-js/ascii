import StringCharCodeAt from '#primordials/StringCharCodeAt';
import Uint8Array from '#primordials/Uint8Array';

const EncodeStringReplace = string => {
  const length = string.length;
  const bytes = new Uint8Array(length);
  for (let i = 0; i < length; i++) {
    const charCode = StringCharCodeAt(string, i);
    bytes[i] = charCode > 0x7f ? 0x3f : charCode;
  }
  return bytes;
}

export default EncodeStringReplace;
