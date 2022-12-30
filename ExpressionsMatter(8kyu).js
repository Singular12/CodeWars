// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained which is 'return Math.max(...output);'


function expressionMatter(a, b, c) {
  let output = [];
  output.push(a *(b + c));
  output.push(a * b * c);
  output.push(a + b * c);
  output.push((a + b) * c);
  output.push(a+b+c);
    return Math.max(...output);
}
