'use strict';

const BufferSourceAsUint8Array = require('#abstract/BufferSourceAsUint8Array');
const DecodeString = require('#abstract-functions/DecodeString');

const decode = source => {
  const buffer = BufferSourceAsUint8Array(source);
  return DecodeString(buffer);
}

module.exports = decode;
