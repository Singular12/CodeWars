// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    return number * (number % 2 > 0 ? 9 : 8)
}

// Real nerd stuff.
