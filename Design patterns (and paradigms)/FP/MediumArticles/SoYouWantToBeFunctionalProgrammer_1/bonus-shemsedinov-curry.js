function curry(f) {
    return (...args) => {
        if (args.length < f.length) {
            const partialF = f.bind(null, ...args);
            return curry(partialF);
        } else return f(...args);
    }
}

function add5values(a, b, c, d, e) {
    return a + b + c + d + e;
}

const curriedAdd5Values = curry(add5values);
console.log(curriedAdd5Values(1)(2)(3, 4)(5));