'use strict';

const IsBufferSource = require('#types/isBufferSource');
const BufferSourceAsUint8Array = require('#abstract/BufferSourceAsUint8Array');
const ToString = require('#abstract/ToString');
const ValidateBytes = require('#abstract-functions/ValidateBytes');
const ValidateString = require('#abstract-functions/ValidateString');

const validate = input => {
  if (IsBufferSource(input)) {
    const buffer = BufferSourceAsUint8Array(input);
    return ValidateBytes(buffer);
  }
  const string = ToString(input);
  return ValidateString(string);
}

module.exports = validate;
