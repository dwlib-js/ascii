import StringFromCharCode from '#primordials/StringFromCharCode';
import TypedArrayLength from '#primordials/TypedArrayLength';

const DecodeStringBreak = buffer => {
  const length = TypedArrayLength(buffer);
  let string = '';
  for (let i = 0; i < length; i++) {
    const byte = buffer[i];
    if (byte > 0x7f) {
      break;
    }
    string += StringFromCharCode(byte);
  }
  return string;
}

export default DecodeStringBreak;
