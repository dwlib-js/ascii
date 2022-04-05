'use strict';

const RangeError = require('#primordials/RangeError');
const StringToLowerCase = require('#primordials/StringToLowerCase');
const ToString = require('#abstract/ToString');

const ToEncodingMode = argument => {
  const string = ToString(argument);
  const mode = StringToLowerCase(string);
  if (
    mode !== 'strict' &&
    mode !== 'break' &&
    mode !== 'ignore' &&
    mode !== 'replace' &&
    mode !== 'clamp'
  ) {
    throw new RangeError('Invalid encoding mode');
  }
  return mode;
}

module.exports = ToEncodingMode;
