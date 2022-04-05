import BufferSourceAsUint8Array from '#abstract/BufferSourceAsUint8Array';
import DecodeString from '#abstract-functions/DecodeString';
import ToEncodingMode from '#abstract-functions/ToEncodingMode';

const decode = (source, mode) => {
  const buffer = BufferSourceAsUint8Array(source);
  const encodingMode = mode === undefined ? 'clamp' : ToEncodingMode(mode);
  return DecodeString(buffer, encodingMode);
}

export default decode;
