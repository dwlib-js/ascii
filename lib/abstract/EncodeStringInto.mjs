import EncodeStringIntoBreak from './EncodeStringIntoBreak.mjs';
import EncodeStringIntoClamp from './EncodeStringIntoClamp.mjs';
import EncodeStringIntoIgnore from './EncodeStringIntoIgnore.mjs';
import EncodeStringIntoReplace from './EncodeStringIntoReplace.mjs';
import EncodeStringIntoStrict from './EncodeStringIntoStrict.mjs';

const EncodeStringInto = (string, destination, errorMode) => {
  const encodeInto = (
    errorMode === 'strict' ? EncodeStringIntoStrict :
    errorMode === 'break' ? EncodeStringIntoBreak :
    errorMode === 'ignore' ? EncodeStringIntoIgnore :
    errorMode === 'replace' ? EncodeStringIntoReplace : EncodeStringIntoClamp
  );
  return encodeInto(string, destination);
}

export default EncodeStringInto;
