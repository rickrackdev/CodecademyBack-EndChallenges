/*
Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:

If the year is in the future, you should return a string in the following format:
'You will be [calculated age] in the year [year passed in]'

If the year is before they were born, you should return a string in the following format:
'The year [year passed in] was [calculated number of years] years before you were born'

If the year is in the past but not before the person was born, you should return a string in the following format:
'You were [calculated age] in the year [year passed in]'
*/

const howOld = (age, year) => {
  if (year > 2024) {
    return `You will be ${year - 2024 + age} in the year ${year}`;
  } else if (year < 2024 - age) {
    return `The year ${year} was ${
      2024 - year - age
    } years before you were born`;
  } else if (year >= 2024 - age && year <= 2024) {
    return `You were ${age - (2024 - year)} in the year ${year}`;
  }
};

console.log(howOld(25, 2024));
