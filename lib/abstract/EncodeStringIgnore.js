'use strict';

const StringCharCodeAt = require('#primordials/StringCharCodeAt');
const TypedArraySlice = require('#primordials/TypedArraySlice');
const Uint8Array = require('#primordials/Uint8Array');

const EncodeStringIgnore = string => {
  const length = string.length;
  const bytes = new Uint8Array(length);
  let index = 0;
  for (let i = 0; i < length; i++) {
    const charCode = StringCharCodeAt(string, i);
    if (charCode > 0x7f) {
      continue;
    }
    bytes[index++] = charCode;
  }
  return index !== length ? TypedArraySlice(bytes, 0, index) : bytes;
}

module.exports = EncodeStringIgnore;
