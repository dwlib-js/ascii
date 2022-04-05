'use strict';

const ToString = require('#abstract/ToString');
const EncodeString = require('#abstract-functions/EncodeString');
const ToErrorMode = require('#abstract-functions/ToErrorMode');

const encode = (string, errorMode) => {
  const chars = ToString(string);
  const mode = errorMode === undefined ? 'clamp' : ToErrorMode(errorMode);
  return EncodeString(chars, mode);
}

module.exports = encode;
