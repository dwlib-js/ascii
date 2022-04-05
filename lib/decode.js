'use strict';

const BufferSourceAsUint8Array = require('#abstract/BufferSourceAsUint8Array');
const DecodeString = require('#abstract-functions/DecodeString');
const ToEncodingMode = require('#abstract-functions/ToEncodingMode');

const decode = (source, mode) => {
  const buffer = BufferSourceAsUint8Array(source);
  const encodingMode = mode === undefined ? 'clamp' : ToEncodingMode(mode);
  return DecodeString(buffer, encodingMode);
}

module.exports = decode;
