'use strict';

const IsBufferSource = require('#types/isBufferSource');
const BufferSourceAsUint8Array = require('#abstract/BufferSourceAsUint8Array');
const ToString = require('#abstract/ToString');
const IsValidBytes = require('#abstract-functions/IsValidBytes');
const IsValidString = require('#abstract-functions/IsValidString');

const isValid = input => {
  if (IsBufferSource(input)) {
    const buffer = BufferSourceAsUint8Array(input);
    return IsValidBytes(buffer);
  }
  const string = ToString(input);
  return IsValidString(string);
}

module.exports = isValid;
