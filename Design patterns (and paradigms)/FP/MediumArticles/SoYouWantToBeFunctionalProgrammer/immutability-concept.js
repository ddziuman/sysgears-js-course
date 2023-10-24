// in FP 'immutability' means that there are NO VARIABLES, just CONSTANTS.

// Whenever we need to change a value (single value or record-object-type), we
// - make an updated copy of the old value

const a = 2; // hmmm...I now need 3:
const aCopy = a + 1; // and not 'a = a + 1', even if 'a' is declared as 'let'!

const obj = { a: 1, b: 2, c: true }; // hmmm...I need to change 'c':
const objCopy = { a: 1, b: 2, c: false };

// Due to 'immutability' in FP there are also:
// - no 'direct' loop constructs ('for', 'do..while', 'while', etc.)

// - instead, FP incorporates RECURSIVE LOOPS, by calling the same function within a function:

function sumInRange(start, end, acum) {
    if (start > end) return acum; // recursive end condition
    return sumInRange(start + 1, end, acum + start); // recursive call
}

console.log(sumInRange(1, 10, 0)); // initial params;   result is 55
console.log(sumInRange(-5, 5, 0)); // 0
console.log(sumInRange(1, 100, 0)); // 5050