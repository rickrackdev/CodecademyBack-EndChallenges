/*
Write a function subLength() that takes 2 parameters, a string and a single character. 
The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. 
If there are less than 2 or more than 2 occurrences of the character the function should return 0.

Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0
*/

let subLength = (word, char) => {
  let indexOfFirst = word.indexOf(char);
  let indexOfSecond = word.indexOf(char, indexOfFirst + 1);
  let result = indexOfSecond - indexOfFirst;
  let counter;
  for (let i = 0; i < word.lenght; i++) {
    console.log(`${word[i]}`);
    if (word[i] === "char") {
      console.log("hey i am counter" + counter);
      counter++;
    }
  }
  return counter;
};

console.log(subLength("momentum", "m"));
