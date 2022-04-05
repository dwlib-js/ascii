'use strict';

const TypedArrayLength = require('#primordials/TypedArrayLength');

const IsValidBytes = buffer => {
  const length = TypedArrayLength(buffer);
  for (let i = 0; i < length; i++) {
    const byte = buffer[i];
    if (byte > 0x7f) {
      return false;
    }
  }
  return true;
}

module.exports = IsValidBytes;
