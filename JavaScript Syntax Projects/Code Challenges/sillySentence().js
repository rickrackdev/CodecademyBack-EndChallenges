/*Write a function, sillySentence(), that has 3 string parameters and returns the following silly sentence with the blanks filled in by the arguments passed into the function:
I am so ______ because I ______ coding! Time to write some more awesome _______!
*/

const sillySentence = (adjective, verb, noun) =>
  `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`;
console.log(sillySentence("excited", "love", "functions"));
