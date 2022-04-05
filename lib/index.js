'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const ObjectCreate = require('#primordials/ObjectCreate');
const ReflectDefineProperty = require('#primordials/ReflectDefineProperty');
const ASCIIDecode = require('./decode');
const ASCIIEncode = require('./encode');
const ASCIIEncodeInto = require('./encodeInto');
const ASCIIIsValid = require('./isValid');
const ASCIIValidate = require('./validate');

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
  },
  isValid: {
    value: ASCIIIsValid
  },
  validate: {
    value: ASCIIValidate
  }
});
ReflectDefineProperty(ASCII, SymbolToStringTag, {
  value: 'ASCII'
});

module.exports = ASCII;
