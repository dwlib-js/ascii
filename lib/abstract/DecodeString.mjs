import DecodeStringBreak from './DecodeStringBreak.mjs';
import DecodeStringClamp from './DecodeStringClamp.mjs';
import DecodeStringIgnore from './DecodeStringIgnore.mjs';
import DecodeStringReplace from './DecodeStringReplace.mjs';
import DecodeStringStrict from './DecodeStringStrict.mjs';

const DecodeString = (buffer, errorMode) => {
  const decode = (
    errorMode === 'strict' ? DecodeStringStrict :
    errorMode === 'break' ? DecodeStringBreak :
    errorMode === 'ignore' ? DecodeStringIgnore :
    errorMode === 'replace' ? DecodeStringReplace : DecodeStringClamp
  );
  return decode(buffer);
}

export default DecodeString;
