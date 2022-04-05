'use strict';

const EncodeStringIntoBreak = require('./EncodeStringIntoBreak');
const EncodeStringIntoClamp = require('./EncodeStringIntoClamp');
const EncodeStringIntoIgnore = require('./EncodeStringIntoIgnore');
const EncodeStringIntoReplace = require('./EncodeStringIntoReplace');
const EncodeStringIntoStrict = require('./EncodeStringIntoStrict');

const EncodeStringInto = (string, destination, errorMode) => {
  const encodeInto = (
    errorMode === 'strict' ? EncodeStringIntoStrict :
    errorMode === 'break' ? EncodeStringIntoBreak :
    errorMode === 'ignore' ? EncodeStringIntoIgnore :
    errorMode === 'replace' ? EncodeStringIntoReplace : EncodeStringIntoClamp
  );
  return encodeInto(string, destination);
}

module.exports = EncodeStringInto;
