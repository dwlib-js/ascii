'use strict';

const StringCharCodeAt = require('#primordials/StringCharCodeAt');
const TypedArrayLength = require('#primordials/TypedArrayLength');
const ThrowInvalidCharacterError = require('./ThrowInvalidCharacterError');

const EncodeStringIntoStrict = (string, destination) => {
  const length = string.length;
  const destinationLength = TypedArrayLength(destination);
  let index = 0;
  while (index < length && index < destinationLength) {
    const charCode = StringCharCodeAt(string, index);
    if (charCode > 0x7f) {
      ThrowInvalidCharacterError(index);
    }
    destination[index++] = charCode;
  }
  return {
    read: index,
    written: index
  };
}

module.exports = EncodeStringIntoStrict;
