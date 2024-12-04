/*Sleep Debt Calculator
Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. 
In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/

const getSleepHours = (day) => {
  day = day.toLowerCase();
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 5;
      break;
    case "wednesday":
      return 5;
      break;
    case "thursday":
      return 5;
      break;
    case "friday":
      return 5;
      break;
    case "saturday":
      return 5;
      break;
    case "sunday":
      return 5;
      break;
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log(
      `You got the perfect amount of sleep, you slept ${actualSleepHours} this week.`
    );
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You got more sleep than needed, you slept ${
        actualSleepHours - idealSleepHours
      } extra hours this week.`
    );
  } else {
    console.log(
      `You need some rest, you slept ${
        idealSleepHours - actualSleepHours
      } less hours than your ideal weekly goal.`
    );
  }
};

calculateSleepDebt();
