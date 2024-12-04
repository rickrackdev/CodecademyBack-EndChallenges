/*Magic Eight Ball
You’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.

In this project we will build a Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune.
*/

let userName = "Ricardo";
let userQuestion = "Can I fly?";
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

console.log(
  `${userName} you asked the magic eight ball the following: ${userQuestion}`
);

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    console.log(`Your fate says: ${eightBall}.`);
    break;
  case 1:
    eightBall = "It is decidedly so";
    console.log(`Your fate says: ${eightBall}.`);
    break;
  case 2:
    eightBall = "Reply hazy try again";
    console.log(`Your fate says: ${eightBall}.`);
    break;
  case 3:
    eightBall = "Cannot predict now";
    console.log(`Your fate says: ${eightBall}.`);
    break;
  case 4:
    eightBall = "Do not count on it";
    console.log(`Your fate says: ${eightBall}.`);
    break;
  case 5:
    eightBall = "My sources say no";
    console.log(`Your fate says: ${eightBall}.`);
    break;
  case 6:
    eightBall = "Outlook not so good";
    console.log(`Your fate says: ${eightBall}.`);
    break;
  default:
    console.log(`Your fate says: ${eightBall}.`);
    break;
}
