import TypeError from '#primordials/TypeError';
import IsBufferSource from '#types/isBufferSource';
import IsString from '#types/isString';
import BufferSourceAsUint8Array from '#abstract/BufferSourceAsUint8Array';
import ValidateBytes from '#abstract-functions/ValidateBytes';
import ValidateString from '#abstract-functions/ValidateString';

const validate = input => {
  if (IsString(input)) {
    return ValidateString(input);
  }
  if (IsBufferSource(input)) {
    const buffer = BufferSourceAsUint8Array(input);
    return ValidateBytes(buffer);
  }
  throw new TypeError('input is not a string or an instance of ArrayBuffer or ArrayBufferView');
}

export default validate;
