import IsBufferSource from '#types/isBufferSource';
import BufferSourceAsUint8Array from '#abstract/BufferSourceAsUint8Array';
import ToString from '#abstract/ToString';
import IsValidBytes from '#abstract-functions/IsValidBytes';
import IsValidString from '#abstract-functions/IsValidString';

const isValid = input => {
  if (IsBufferSource(input)) {
    const buffer = BufferSourceAsUint8Array(input);
    return IsValidBytes(buffer);
  }
  const string = ToString(input);
  return IsValidString(string);
}

export default isValid;
