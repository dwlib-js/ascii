'use strict';

const EncodeStringIntoBreak = require('./EncodeStringIntoBreak');
const EncodeStringIntoClamp = require('./EncodeStringIntoClamp');
const EncodeStringIntoIgnore = require('./EncodeStringIntoIgnore');
const EncodeStringIntoReplace = require('./EncodeStringIntoReplace');
const EncodeStringIntoStrict = require('./EncodeStringIntoStrict');

const EncodeStringInto = (string, destination, mode) => {
  const encodeInto = (
    mode === 'strict' ? EncodeStringIntoStrict :
    mode === 'break' ? EncodeStringIntoBreak :
    mode === 'ignore' ? EncodeStringIntoIgnore :
    mode === 'replace' ? EncodeStringIntoReplace : EncodeStringIntoClamp
  );
  return encodeInto(string, destination);
}

module.exports = EncodeStringInto;
