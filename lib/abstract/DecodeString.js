'use strict';

const DecodeStringBreak = require('./DecodeStringBreak');
const DecodeStringClamp = require('./DecodeStringClamp');
const DecodeStringIgnore = require('./DecodeStringIgnore');
const DecodeStringReplace = require('./DecodeStringReplace');
const DecodeStringStrict = require('./DecodeStringStrict');

const DecodeString = (buffer, errorMode) => {
  const decode = (
    errorMode === 'strict' ? DecodeStringStrict :
    errorMode === 'break' ? DecodeStringBreak :
    errorMode === 'ignore' ? DecodeStringIgnore :
    errorMode === 'replace' ? DecodeStringReplace : DecodeStringClamp
  );
  return decode(buffer);
}

module.exports = DecodeString;
