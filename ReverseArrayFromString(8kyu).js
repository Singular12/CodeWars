// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(num) {
  return num.toString().split('').reverse().map(Number);
}
