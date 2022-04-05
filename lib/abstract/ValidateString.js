'use strict';

const StringCharCodeAt = require('#primordials/StringCharCodeAt');
const ThrowInvalidCharacterError = require('./ThrowInvalidCharacterError');

const ValidateString = string => {
  const length = string.length;
  for (let i = 0; i < length; i++) {
    const charCode = StringCharCodeAt(string, i);
    if (charCode > 0x7f) {
      ThrowInvalidCharacterError(i);
    }
  }
  return string;
}

module.exports = ValidateString;
