import ToString from '#abstract/ToString';
import EncodeString from '#abstract-functions/EncodeString';
import EncodeStringOrThrow from '#abstract-functions/EncodeStringOrThrow';

const encode = (string, fatal) => {
  const chars = ToString(string);
  return fatal ? EncodeStringOrThrow(chars) : EncodeString(chars);
}

export default encode;
