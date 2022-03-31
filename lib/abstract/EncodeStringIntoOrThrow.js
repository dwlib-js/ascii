'use strict';

const StringCharCodeAt = require('#primordials/StringCharCodeAt');
const TypedArrayLength = require('#primordials/TypedArrayLength');
const ThrowInvalidCharacterError = require('./ThrowInvalidCharacterError');

const EncodeStringIntoOrThrow = (string, destination) => {
  const length = string.length;
  const destinationLength = TypedArrayLength(destination);
  let index = 0;
  while (index < length && index < destinationLength) {
    const charCode = StringCharCodeAt(string, index);
    if (charCode > 0xff) {
      ThrowInvalidCharacterError(index);
    }
    destination[index] = charCode;
    index++;
  }
  return index;
}

module.exports = EncodeStringIntoOrThrow;
