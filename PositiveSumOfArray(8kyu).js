// Return the sum of all the positive numbers in a given array.

function positiveSum(arr) {
  let sum = 0 // Setting up sum as 0
    arr.forEach(num => num > 0 && (sum += num)) // forEach method designed to execute the code 'for each' example, in this case, each index of the array.
  return sum
}

// So we are comparing if the number is greater than zero AND 
// if sum is equal to itself + 1
