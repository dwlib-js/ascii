import StringFromCharCode from '#primordials/StringFromCharCode';
import TypedArrayLength from '#primordials/TypedArrayLength';
import ThrowInvalidCodePointError from './ThrowInvalidCodePointError.mjs';

const DecodeStringStrict = buffer => {
  const length = TypedArrayLength(buffer);
  let string = '';
  for (let i = 0; i < length; i++) {
    const byte = buffer[i];
    if (byte > 0x7f) {
      ThrowInvalidCodePointError(i);
    }
    string += StringFromCharCode(byte);
  }
  return string;
}

export default DecodeStringStrict;
