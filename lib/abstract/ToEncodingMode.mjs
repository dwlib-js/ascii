import RangeError from '#primordials/RangeError';
import StringToLowerCase from '#primordials/StringToLowerCase';
import ToString from '#abstract/ToString';

const ToEncodingMode = argument => {
  const string = ToString(argument);
  const mode = StringToLowerCase(string);
  if (
    mode !== 'strict' &&
    mode !== 'break' &&
    mode !== 'ignore' &&
    mode !== 'replace' &&
    mode !== 'clamp'
  ) {
    throw new RangeError('Invalid encoding mode');
  }
  return mode;
}

export default ToEncodingMode;
