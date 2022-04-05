'use strict';

const StringFromCharCode = require('#primordials/StringFromCharCode');
const TypedArrayLength = require('#primordials/TypedArrayLength');

const DecodeStringReplace = buffer => {
  const length = TypedArrayLength(buffer);
  let string = '';
  for (let i = 0; i < length; i++) {
    const byte = buffer[i];
    string += byte > 0x7f ? '?' : StringFromCharCode(byte);
  }
  return string;
}

module.exports = DecodeStringReplace;
