function add(a, b = 5) {
    return a + b;
}

console.log(add(10));   // uses default b = 5 → 15
console.log(add(10, 20)); // overrides default → 30
