// DEFINITION: 'higher-order functions' are the ones which either
// - accept functions as parameters
// - return a function
// - do both

function validateValue(value, parser) { // 'parser' function as an argument of another (higher-order) function
    if (parser(value)) return true;
    else return false;
}

function makeAdder(addTo) {
    return (value) => addTo + value; // function as a returned value (of another higher-order function)
}

function makeAddValidated(valueAddTo, parser) { // higher-order function both accepting and returning a function
    if (parser(valueAddTo)) {
        return (value) => valueAddTo + value;
    } else throw new Error('Invalid valueAddTo');
}

// The 'higher-order functions' concept has come to FP from the 'first citizen' concept
// because all functions in FP (and btw in JS) are 'first-citizen' values.

// DEFINITION: a language's 'first citizen' value is the one which can be used as a general value in any situation
// - set a value
// - read from this value
// - pass it as an argument
// - return it as a value from a function
// etc.
