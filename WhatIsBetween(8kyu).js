// Taking two arguments and using them as the first entry and the last entry to create an array -- but show each entry in between.

function between(a, b) {
    let arr = [];
   for (let i = a; i <= b; i++) {
       arr.push(i);
   }
  return arr;
}
