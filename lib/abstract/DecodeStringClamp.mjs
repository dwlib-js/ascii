import StringFromCharCode from '#primordials/StringFromCharCode';
import TypedArrayLength from '#primordials/TypedArrayLength';

const DecodeStringClamp = buffer => {
  const length = TypedArrayLength(buffer);
  let string = '';
  for (let i = 0; i < length; i++) {
    const byte = buffer[i];
    const charCode = byte & 0x7f;
    string += StringFromCharCode(charCode);
  }
  return string;
}

export default DecodeStringClamp;
