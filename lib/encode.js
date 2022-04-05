'use strict';

const ToString = require('#abstract/ToString');
const EncodeString = require('#abstract-functions/EncodeString');
const ToEncodingMode = require('#abstract-functions/ToEncodingMode');

const encode = (string, mode) => {
  const chars = ToString(string);
  const encodingMode = mode === undefined ? 'clamp' : ToEncodingMode(mode);
  return EncodeString(chars, encodingMode);
}

module.exports = encode;
