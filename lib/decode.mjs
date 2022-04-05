import BufferSourceAsUint8Array from '#abstract/BufferSourceAsUint8Array';
import DecodeString from '#abstract-functions/DecodeString';
import ToErrorMode from '#abstract-functions/ToErrorMode';

const decode = (source, errorMode) => {
  const buffer = BufferSourceAsUint8Array(source);
  const mode = errorMode === undefined ? 'clamp' : ToErrorMode(errorMode);
  return DecodeString(buffer, mode);
}

export default decode;
