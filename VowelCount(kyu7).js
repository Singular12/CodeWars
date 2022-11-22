function getCount(str) {
   var m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}

// Returns the vowel count in a string.  Kind of worthless.
