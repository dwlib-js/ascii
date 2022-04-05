'use strict';

const TypeError = require('#primordials/TypeError');
const IsBufferSource = require('#types/isBufferSource');
const IsString = require('#types/isString');
const BufferSourceAsUint8Array = require('#abstract/BufferSourceAsUint8Array');
const ValidateBytes = require('#abstract-functions/ValidateBytes');
const ValidateString = require('#abstract-functions/ValidateString');

const validate = input => {
  if (IsString(input)) {
    return ValidateString(input);
  }
  if (IsBufferSource(input)) {
    const buffer = BufferSourceAsUint8Array(input);
    return ValidateBytes(buffer);
  }
  throw new TypeError('input is not a string or an instance of ArrayBuffer or ArrayBufferView');
}

module.exports = validate;
