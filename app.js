function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return `${num} is Even`;
    } else {
        return `${num} is Odd`;
    }
}

console.log(checkEvenOdd(7));
console.log(checkEvenOdd(12));
