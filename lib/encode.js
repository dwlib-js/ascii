'use strict';

const ToString = require('#abstract/ToString');
const EncodeString = require('#abstract-functions/EncodeString');
const EncodeStringOrThrow = require('#abstract-functions/EncodeStringOrThrow');

const encode = (string, fatal) => {
  const chars = ToString(string);
  return fatal ? EncodeStringOrThrow(chars) : EncodeString(chars);
}

module.exports = encode;
