'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const ObjectCreate = require('#primordials/ObjectCreate');
const ReflectDefineProperty = require('#primordials/ReflectDefineProperty');
const ASCIIDecode = require('./decode');
const ASCIIEncode = require('./encode');
const ASCIIEncodeInto = require('./encodeInto');

const ObjectPrototype = GetIntrinsicOrThrow('Object.prototype');
const SymbolToStringTag = GetIntrinsicOrThrow('@@toStringTag');

const ASCII = ObjectCreate(ObjectPrototype, {
  decode: {
    value: ASCIIDecode
  },
  encode: {
    value: ASCIIEncode
  },
  encodeInto: {
    value: ASCIIEncodeInto
  }
});
ReflectDefineProperty(ASCII, SymbolToStringTag, {
  value: 'ASCII'
});

module.exports = ASCII;
