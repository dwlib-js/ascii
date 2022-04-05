import IsBufferSource from '#types/isBufferSource';
import IsString from '#types/isString';
import BufferSourceAsUint8Array from '#abstract/BufferSourceAsUint8Array';
import IsValidBytes from '#abstract-functions/IsValidBytes';
import IsValidString from '#abstract-functions/IsValidString';

const isValid = input => {
  if (IsString(input)) {
    return IsValidString(input);
  }
  if (IsBufferSource(input)) {
    const buffer = BufferSourceAsUint8Array(input);
    return IsValidBytes(buffer);
  }
  return false;
}

export default isValid;
