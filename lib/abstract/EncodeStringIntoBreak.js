'use strict';

const StringCharCodeAt = require('#primordials/StringCharCodeAt');
const TypedArrayLength = require('#primordials/TypedArrayLength');

const EncodeStringIntoBreak = (string, destination) => {
  const length = string.length;
  const destinationLength = TypedArrayLength(destination);
  let index = 0;
  let destinationIndex = 0;
  while (index < length && destinationIndex < destinationLength) {
    const charCode = StringCharCodeAt(string, index);
    if (charCode > 0x7f) {
      break;
    }
    destination[destinationIndex++] = charCode;
    index++;
  }
  return {
    read: index,
    written: destinationIndex
  };
}

module.exports = EncodeStringIntoBreak;
