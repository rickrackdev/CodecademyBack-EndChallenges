/*
Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.

Return the tip, as a number, based on the following:
‘bad’ should return a 5% tip
‘ok’ should return a 15% tip
‘good’ should return a 20% tip
‘excellent’ should return a 30% tip
all other inputs should default to 18%

tipCalculator('good', 100) // Should return 20
*/

const tipCalculator = (quality, total) => {
  switch (quality) {
    case "bad":
      return total * 0.05;
      break;
    case "ok":
      return total * 0.15;
      break;
    case "good":
      return total * 0.2;
      break;
    case "excellent":
      return total * 0.3;
      break;
    default:
      return total * 0.18;
      break;
  }
};

console.log(tipCalculator("good", 100));
