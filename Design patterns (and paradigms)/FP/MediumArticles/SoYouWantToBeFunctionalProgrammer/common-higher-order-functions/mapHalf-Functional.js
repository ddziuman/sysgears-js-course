function map(f, array) {
    const res = []; // half-sense of immutability
    for (let i = 0; i < array.length; i++) { // using imperative loops, but still encapsulating this boilerplate code
        res.push(f(array[i])); // mutation!
    }
    return res;
}