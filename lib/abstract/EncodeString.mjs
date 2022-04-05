import EncodeStringBreak from './EncodeStringBreak.mjs';
import EncodeStringClamp from './EncodeStringClamp.mjs';
import EncodeStringIgnore from './EncodeStringIgnore.mjs';
import EncodeStringReplace from './EncodeStringReplace.mjs';
import EncodeStringStrict from './EncodeStringStrict.mjs';

const EncodeString = (string, mode) => {
  const encode = (
    mode === 'strict' ? EncodeStringStrict :
    mode === 'break' ? EncodeStringBreak :
    mode === 'ignore' ? EncodeStringIgnore :
    mode === 'replace' ? EncodeStringReplace : EncodeStringClamp
  );
  return encode(string);
}

export default EncodeString;
