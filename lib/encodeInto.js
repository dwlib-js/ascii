'use strict';

const TypeError = require('#primordials/TypeError');
const IsUint8Array = require('#types/isUint8Array');
const ToString = require('#abstract/ToString');
const EncodeStringInto = require('#abstract-functions/EncodeStringInto');
const ToEncodingMode = require('#abstract-functions/ToEncodingMode');

const encodeInto = (string, destination, mode) => {
  const chars = ToString(string);
  if (!IsUint8Array(destination)) {
    throw new TypeError('destination is not an instance of Uint8Array');
  }
  const encodingMode = mode === undefined ? 'clamp' : ToEncodingMode(mode);
  return EncodeStringInto(chars, destination, encodingMode);
}

module.exports = encodeInto;
