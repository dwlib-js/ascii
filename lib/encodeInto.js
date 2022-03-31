'use strict';

const TypeError = require('#primordials/TypeError');
const IsUint8Array = require('#types/isUint8Array');
const ToString = require('#abstract/ToString');
const EncodeStringInto = require('#abstract-functions/EncodeStringInto');
const EncodeStringIntoOrThrow = require('#abstract-functions/EncodeStringIntoOrThrow');

const encodeInto = (string, destination, fatal) => {
  const chars = ToString(string);
  if (!IsUint8Array(destination)) {
    throw new TypeError('destination is not an instance of Uint8Array');
  }
  return fatal ? EncodeStringIntoOrThrow(chars, destination) : EncodeStringInto(chars, destination);
}

module.exports = encodeInto;
