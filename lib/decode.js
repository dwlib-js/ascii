'use strict';

const BufferSourceAsUint8Array = require('#abstract/BufferSourceAsUint8Array');
const DecodeString = require('#abstract-functions/DecodeString');
const ToErrorMode = require('#abstract-functions/ToErrorMode');

const decode = (source, errorMode) => {
  const buffer = BufferSourceAsUint8Array(source);
  const mode = errorMode === undefined ? 'clamp' : ToErrorMode(errorMode);
  return DecodeString(buffer, mode);
}

module.exports = decode;
