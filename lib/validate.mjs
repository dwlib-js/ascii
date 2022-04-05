import IsBufferSource from '#types/isBufferSource';
import BufferSourceAsUint8Array from '#abstract/BufferSourceAsUint8Array';
import ToString from '#abstract/ToString';
import ValidateBytes from '#abstract-functions/ValidateBytes';
import ValidateString from '#abstract-functions/ValidateString';

const validate = input => {
  if (IsBufferSource(input)) {
    const buffer = BufferSourceAsUint8Array(input);
    return ValidateBytes(buffer);
  }
  const string = ToString(input);
  return ValidateString(string);
}

export default validate;
