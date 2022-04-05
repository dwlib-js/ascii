import TypeError from '#primordials/TypeError';
import IsUint8Array from '#types/isUint8Array';
import ToString from '#abstract/ToString';
import EncodeStringInto from '#abstract-functions/EncodeStringInto';
import ToEncodingMode from '#abstract-functions/ToEncodingMode';

const encodeInto = (string, destination, mode) => {
  const chars = ToString(string);
  if (!IsUint8Array(destination)) {
    throw new TypeError('destination is not an instance of Uint8Array');
  }
  const encodingMode = mode === undefined ? 'clamp' : ToEncodingMode(mode);
  return EncodeStringInto(chars, destination, encodingMode);
}

export default encodeInto;
