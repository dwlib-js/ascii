'use strict';

const StringCharCodeAt = require('#primordials/StringCharCodeAt');
const Uint8Array = require('#primordials/Uint8Array');
const ThrowInvalidCharacterError = require('./ThrowInvalidCharacterError');

const EncodeStringStrict = string => {
  const length = string.length;
  const bytes = new Uint8Array(length);
  for (let i = 0; i < length; i++) {
    const charCode = StringCharCodeAt(string, i);
    if (charCode > 0x7f) {
      ThrowInvalidCharacterError(i);
    }
    bytes[i] = charCode;
  }
  return bytes;
}

module.exports = EncodeStringStrict;
