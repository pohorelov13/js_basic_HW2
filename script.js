
function celsiusToFahrenheit(tempInCelsius) {
    return ((tempInCelsius * (9/5)) + 32);
}

const tempInCelsius = parseFloat(prompt("Enter temperature in Celsius:"))
let message;

isNaN(tempInCelsius) ?
    message = 'Please, enter a number...':
    message = 'Temp in Fahrenheit is ' + celsiusToFahrenheit(tempInCelsius);


alert(message);
