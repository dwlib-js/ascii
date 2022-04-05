import TypeError from '#primordials/TypeError';
import IsUint8Array from '#types/isUint8Array';
import ToString from '#abstract/ToString';
import EncodeStringInto from '#abstract-functions/EncodeStringInto';
import ToErrorMode from '#abstract-functions/ToErrorMode';

const encodeInto = (string, destination, errorMode) => {
  const chars = ToString(string);
  if (!IsUint8Array(destination)) {
    throw new TypeError('destination is not an instance of Uint8Array');
  }
  const mode = errorMode === undefined ? 'clamp' : ToErrorMode(errorMode);
  return EncodeStringInto(chars, destination, mode);
}

export default encodeInto;
