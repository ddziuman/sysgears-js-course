// DEFINITION: 'Functional composition' is the way of combining multiple function calls, while defining
// their calling/execution order in a way that one function goes after another has completed.

// This term comes from mathematical 'functional composition' which is defined as follows:
//  f ∘ g is functional composition and is read “f composed with g” or, more commonly, “f after g”. So (f ∘ g)(x) 
// is equivalent to calling f after calling g with x or simply, f(g(x)).



const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;

// now we need a function that first adds 5, then multiplies by 10.
// so, instead of defining it like this, copypasting the same behaviour as already been written above...:
const wrongAdd5Mult10 = (value) => (value + 5) * 10;

// ...we compose already existing functions which can help to define this function...:
const add5Mult10 = (val) => multiply(sum(val, 5), 10);

console.log(wrongAdd5Mult10(5));
console.log(add5Mult10(5));

// this is a cool example of functional composition. But the problems will start to occur,
// when we will still need the same inner function calls, like 'sum(val, 5)' with 5 as 2 argument,
// or multiply(<computed>, 10) with 10 as 2 argument.
// So we would still have to write the same code...And by the way, mathematical 'functional composition' only defines it as k = f(g(x))

// No, we would not, because this problem is solved by the currying concept... (see 'currying.js')

