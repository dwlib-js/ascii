import ToString from '#abstract/ToString';
import EncodeString from '#abstract-functions/EncodeString';
import ToErrorMode from '#abstract-functions/ToErrorMode';

const encode = (string, errorMode) => {
  const chars = ToString(string);
  const mode = errorMode === undefined ? 'clamp' : ToErrorMode(errorMode);
  return EncodeString(chars, mode);
}

export default encode;
