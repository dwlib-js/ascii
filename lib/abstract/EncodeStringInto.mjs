import EncodeStringIntoBreak from './EncodeStringIntoBreak.mjs';
import EncodeStringIntoClamp from './EncodeStringIntoClamp.mjs';
import EncodeStringIntoIgnore from './EncodeStringIntoIgnore.mjs';
import EncodeStringIntoReplace from './EncodeStringIntoReplace.mjs';
import EncodeStringIntoStrict from './EncodeStringIntoStrict.mjs';

const EncodeStringInto = (string, destination, mode) => {
  const encodeInto = (
    mode === 'strict' ? EncodeStringIntoStrict :
    mode === 'break' ? EncodeStringIntoBreak :
    mode === 'ignore' ? EncodeStringIntoIgnore :
    mode === 'replace' ? EncodeStringIntoReplace : EncodeStringIntoClamp
  );
  return encodeInto(string, destination);
}

export default EncodeStringInto;
