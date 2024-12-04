/*
Kelvin Weather
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.
For example, 283 K converts to 10 °C which converts to 50 °F.
*/

// const variable with today's forecast in Kelvin's.
const kelvin = 293;
// celsius is 273 degrees less than kelvin, we convert this by substracting 273 from the kelvin value in the variable.
let celsius = kelvin - 273;
//calculation to find fahrenheit, f=c(9/5)+32
let fahrenheit = celsius * (9 / 5) + 32;
//rounding the fahrenheit variable to a whole number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

/*
Great work! Kelvin can now publish his forecasts in Celsius and Fahrenheit.

If you’d like extra practice, try this:

Convert celsius to the Newton scale using the equation below
Newton = Celsius * (33/100)
*/

let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`);
