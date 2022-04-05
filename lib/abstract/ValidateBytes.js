'use strict';

const TypedArrayLength = require('#primordials/TypedArrayLength');
const ThrowInvalidCodePointError = require('./ThrowInvalidCodePointError');

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

module.exports = ValidateBytes;
