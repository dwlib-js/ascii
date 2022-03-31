import BufferSourceAsUint8Array from '#abstract/BufferSourceAsUint8Array';
import DecodeString from '#abstract-functions/DecodeString';

const decode = source => {
  const buffer = BufferSourceAsUint8Array(source);
  return DecodeString(buffer);
}

export default decode;
