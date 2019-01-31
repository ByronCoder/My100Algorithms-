// My solution
function celsiusToFahrenheit(celsius: number): number {

    return celsius * (9/5) + 32;
}

console.log(celsiusToFahrenheit(-30));
console.log(celsiusToFahrenheit(-10));
console.log(celsiusToFahrenheit(0));


function celsiusToFahrenheit2(celsius: number): number {
    return celsius * 9 / 5 + 32;
}

console.log(celsiusToFahrenheit2(-30));
console.log(celsiusToFahrenheit2(-10));
console.log(celsiusToFahrenheit2(0));
