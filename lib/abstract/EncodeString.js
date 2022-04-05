'use strict';

const EncodeStringBreak = require('./EncodeStringBreak');
const EncodeStringClamp = require('./EncodeStringClamp');
const EncodeStringIgnore = require('./EncodeStringIgnore');
const EncodeStringReplace = require('./EncodeStringReplace');
const EncodeStringStrict = require('./EncodeStringStrict');

const EncodeString = (string, mode) => {
  const encode = (
    mode === 'strict' ? EncodeStringStrict :
    mode === 'break' ? EncodeStringBreak :
    mode === 'ignore' ? EncodeStringIgnore :
    mode === 'replace' ? EncodeStringReplace : EncodeStringClamp
  );
  return encode(string);
}

module.exports = EncodeString;
