'use strict';

const StringFromCharCode = require('#primordials/StringFromCharCode');
const TypedArrayLength = require('#primordials/TypedArrayLength');

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

module.exports = DecodeStringBreak;
