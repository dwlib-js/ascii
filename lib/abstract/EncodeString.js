'use strict';

const EncodeStringBreak = require('./EncodeStringBreak');
const EncodeStringClamp = require('./EncodeStringClamp');
const EncodeStringIgnore = require('./EncodeStringIgnore');
const EncodeStringReplace = require('./EncodeStringReplace');
const EncodeStringStrict = require('./EncodeStringStrict');

const EncodeString = (string, errorMode) => {
  const encode = (
    errorMode === 'strict' ? EncodeStringStrict :
    errorMode === 'break' ? EncodeStringBreak :
    errorMode === 'ignore' ? EncodeStringIgnore :
    errorMode === 'replace' ? EncodeStringReplace : EncodeStringClamp
  );
  return encode(string);
}

module.exports = EncodeString;
