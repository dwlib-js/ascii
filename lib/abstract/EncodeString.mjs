import EncodeStringBreak from './EncodeStringBreak.mjs';
import EncodeStringClamp from './EncodeStringClamp.mjs';
import EncodeStringIgnore from './EncodeStringIgnore.mjs';
import EncodeStringReplace from './EncodeStringReplace.mjs';
import EncodeStringStrict from './EncodeStringStrict.mjs';

const EncodeString = (string, errorMode) => {
  const encode = (
    errorMode === 'strict' ? EncodeStringStrict :
    errorMode === 'break' ? EncodeStringBreak :
    errorMode === 'ignore' ? EncodeStringIgnore :
    errorMode === 'replace' ? EncodeStringReplace : EncodeStringClamp
  );
  return encode(string);
}

export default EncodeString;
