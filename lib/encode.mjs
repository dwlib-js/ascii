import ToString from '#abstract/ToString';
import EncodeString from '#abstract-functions/EncodeString';
import ToEncodingMode from '#abstract-functions/ToEncodingMode';

const encode = (string, mode) => {
  const chars = ToString(string);
  const encodingMode = mode === undefined ? 'clamp' : ToEncodingMode(mode);
  return EncodeString(chars, encodingMode);
}

export default encode;
