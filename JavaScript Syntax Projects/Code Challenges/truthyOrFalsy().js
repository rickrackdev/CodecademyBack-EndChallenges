/*It can be hard to keep track of what’s truthy or falsy in JavaScript. Write a function, truthyOrFalsy(), that takes in any value and returns true if that value is truthy and false if that value is falsy.*/

const truthyOrFalsy = (parameter) => (parameter ? true : false);

console.log(truthyOrFalsy("hey"));
