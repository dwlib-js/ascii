import StringCharCodeAt from '#primordials/StringCharCodeAt';

const IsValidString = string => {
  const length = string.length;
  for (let i = 0; i < length; i++) {
    const charCode = StringCharCodeAt(string, i);
    if (charCode > 0x7f) {
      return false;
    }
  }
  return true;
}

export default IsValidString;
