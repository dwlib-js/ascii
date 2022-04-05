'use strict';

const TypeError = require('#primordials/TypeError');
const IsUint8Array = require('#types/isUint8Array');
const ToString = require('#abstract/ToString');
const EncodeStringInto = require('#abstract-functions/EncodeStringInto');
const ToErrorMode = require('#abstract-functions/ToErrorMode');

const encodeInto = (string, destination, errorMode) => {
  const chars = ToString(string);
  if (!IsUint8Array(destination)) {
    throw new TypeError('destination is not an instance of Uint8Array');
  }
  const mode = errorMode === undefined ? 'clamp' : ToErrorMode(errorMode);
  return EncodeStringInto(chars, destination, mode);
}

module.exports = encodeInto;
