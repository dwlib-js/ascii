import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import ObjectCreate from '#primordials/ObjectCreate';
import ReflectDefineProperty from '#primordials/ReflectDefineProperty';
import ASCIIDecode from './decode.mjs';
import ASCIIEncode from './encode.mjs';
import ASCIIEncodeInto from './encodeInto.mjs';

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

export default ASCII;
