//  Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

function arrayDiff(a, b) {
    const set = new Set(b);
    return a.filter(x => !set.has(x));
}
