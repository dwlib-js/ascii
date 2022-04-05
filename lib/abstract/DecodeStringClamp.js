'use strict';

const StringFromCharCode = require('#primordials/StringFromCharCode');
const TypedArrayLength = require('#primordials/TypedArrayLength');

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

module.exports = DecodeStringClamp;
