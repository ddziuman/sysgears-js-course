// DEFINITION: a 'closure' is the function's outer scope to which the function has access by the time of function's declaration.
// Closures have come to FP due to the concept of 'higher-order functions'.
// And closures also are an EXCEPTION for the 'purity' of functions: function is still considered 'pure

function makeAdder(addTo) {
    return function(value) {
        return addTo + value;
    }
}

const add10 = makeAdder(10);
console.log(add10(20));
console.log(add10(30));