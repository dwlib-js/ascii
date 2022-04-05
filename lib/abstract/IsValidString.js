'use strict';

const StringCharCodeAt = require('#primordials/StringCharCodeAt');

const IsValidString = string => {
  const length = string.length;
  for (let i = 0; i < length; i++) {
    const charCode = StringCharCodeAt(string, i);
    if (charCode > 0x7f) {
      return false;
    }
  }
  return true;
}

module.exports = IsValidString;
