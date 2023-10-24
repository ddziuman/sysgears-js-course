// DEFINITION: 'curried' function is a function that can accept partial of its parameters at a time (usually only 1 by 1!),
// and actually execute only when all parameters have been passed.

// While part of the parameters come to curried function, actually there's a new function created that has 
// all these parameters binded in the CLOSURE, and accepts other, not yet passed arguments, until all are passed

// When a curried function has got all parameters, it executes and returns a value;


const simpleAdd = (a, b) => a + b;

const curriedAdd = (a) => (b) => a + b;

console.log(simpleAdd(1, 2));

const add1 = curriedAdd(1); // created 'specific' function based on the 'general' add function, for the re-usage sake

// ...later in the code...

console.log(add1(2));