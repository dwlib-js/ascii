'use strict';

const StringCharCodeAt = require('#primordials/StringCharCodeAt');
const TypedArrayLength = require('#primordials/TypedArrayLength');

const EncodeStringInto = (string, destination) => {
  const length = string.length;
  const destinationLength = TypedArrayLength(destination);
  let index = 0;
  while (index < length && index < destinationLength) {
    const charCode = StringCharCodeAt(string, index);
    destination[index] = charCode & 0xff;
    index++;
  }
  return index;
}

module.exports = EncodeStringInto;
