'use strict';

const StringFromCharCode = require('#primordials/StringFromCharCode');
const TypedArrayLength = require('#primordials/TypedArrayLength');
const ThrowInvalidCodePointError = require('./ThrowInvalidCodePointError');

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

module.exports = DecodeStringStrict;
