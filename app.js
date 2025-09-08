function celsiusToFahrenheit(c) {
    return (c * 9/5) + 32;
}

function fahrenheitToCelsius(f) {
    return (f - 32) * 5/9;
}

console.log(celsiusToFahrenheit(30)); // 86°F
console.log(fahrenheitToCelsius(86)); // 30°C
