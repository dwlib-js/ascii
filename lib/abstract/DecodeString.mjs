import DecodeStringBreak from './DecodeStringBreak.mjs';
import DecodeStringClamp from './DecodeStringClamp.mjs';
import DecodeStringIgnore from './DecodeStringIgnore.mjs';
import DecodeStringReplace from './DecodeStringReplace.mjs';
import DecodeStringStrict from './DecodeStringStrict.mjs';

const DecodeString = (buffer, mode) => {
  const decode = (
    mode === 'strict' ? DecodeStringStrict :
    mode === 'break' ? DecodeStringBreak :
    mode === 'ignore' ? DecodeStringIgnore :
    mode === 'replace' ? DecodeStringReplace : DecodeStringClamp
  );
  return decode(buffer);
}

export default DecodeString;
