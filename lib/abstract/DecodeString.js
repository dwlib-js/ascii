'use strict';

const DecodeStringBreak = require('./DecodeStringBreak');
const DecodeStringClamp = require('./DecodeStringClamp');
const DecodeStringIgnore = require('./DecodeStringIgnore');
const DecodeStringReplace = require('./DecodeStringReplace');
const DecodeStringStrict = require('./DecodeStringStrict');

const DecodeString = (buffer, mode) => {
  const decode = (
    mode === 'strict' ? DecodeStringStrict :
    mode === 'break' ? DecodeStringBreak :
    mode === 'ignore' ? DecodeStringIgnore :
    mode === 'replace' ? DecodeStringReplace : DecodeStringClamp
  );
  return decode(buffer);
}

module.exports = DecodeString;
