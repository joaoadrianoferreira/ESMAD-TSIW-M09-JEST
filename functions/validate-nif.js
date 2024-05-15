function isNif(nif) {
  if (isNaN(nif)) {
    return false;
  } else {
    if (nif.toString().length == 9) {
      return true;
    } else {
      throw new Error("invalid_length");
    }
  }
}

module.exports = isNif;
