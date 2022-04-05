import StringFromCharCode from '#primordials/StringFromCharCode';
import TypedArrayLength from '#primordials/TypedArrayLength';

const DecodeStringReplace = buffer => {
  const length = TypedArrayLength(buffer);
  let string = '';
  for (let i = 0; i < length; i++) {
    const byte = buffer[i];
    string += byte > 0x7f ? '?' : StringFromCharCode(byte);
  }
  return string;
}

export default DecodeStringReplace;
