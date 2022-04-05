'use strict';

const IsBufferSource = require('#types/isBufferSource');
const IsString = require('#types/isString');
const BufferSourceAsUint8Array = require('#abstract/BufferSourceAsUint8Array');
const IsValidBytes = require('#abstract-functions/IsValidBytes');
const IsValidString = require('#abstract-functions/IsValidString');

const isValid = input => {
  if (IsString(input)) {
    return IsValidString(input);
  }
  if (IsBufferSource(input)) {
    const buffer = BufferSourceAsUint8Array(input);
    return IsValidBytes(buffer);
  }
  return false;
}

module.exports = isValid;
