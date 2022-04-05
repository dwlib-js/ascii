import TypedArrayLength from '#primordials/TypedArrayLength';
import ThrowInvalidCodePointError from './ThrowInvalidCodePointError.mjs';

const ValidateBytes = buffer => {
  const length = TypedArrayLength(buffer);
  for (let i = 0; i < length; i++) {
    const byte = buffer[i];
    if (byte > 0x7f) {
      ThrowInvalidCodePointError(i);
    }
  }
  return buffer;
}

export default ValidateBytes;
