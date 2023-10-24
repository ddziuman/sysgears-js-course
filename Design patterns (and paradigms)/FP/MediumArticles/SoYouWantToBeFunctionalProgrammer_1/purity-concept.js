// in FP 'purity' always regards to 'pure functions'.

// DEFINITION: A 'pure function' is the one which works only with its input parameters (so, WITHOUT any side effects),
// (a function is still considered 'pure' even if it uses outer closures, because it cannot modify them from within)

// DEFINITION: A 'side effect' is the result of impure function actions that depend on some external (not input) parameters

// a pure function, because it only operates with 'a' and 'b'
function sum(a, b) {
    return a + b;
}

// an impure function, because it uses internal node.js timers functionality ('setTimeout' function call)
function setTimeout100(cb) {
    setTimeout(cb, 1000);
}

// A pure function is USEFUL only when:
// - it accepts 1+ arguments (otherwise, its definition is useless, we could just use a CONSTANT)
// - it returns a value (otherwise, why did we define a function for such thing? AMBIGOUS concept????)
// - no side effects (a requirement, but side effects are inevitable, in some cases, so we must confine them)

