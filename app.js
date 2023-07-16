//kelvin variable is a constant.
const kelvin = 293;

//for celsuis:
let celsius = kelvin - 273;

//for fahrenheit:
let fahrenheit = celsius * (9 / 5) + 32;

//round down fahrenheit to whole # using Math.floor() method:
Math.floor(fahrenheit);

//prints Kelvin using interpolation:
console.log(`The temperature is ${kelvin} degrees Kelvin.`);
//should print 293

//prints Celsius using interpolation:
console.log(`The temperature is ${celsius} degrees Celsius.`);
//should print 20

//prints Celsius using interpolation:
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//should print 68
