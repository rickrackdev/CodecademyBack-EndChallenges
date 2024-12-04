/*Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two strings are the same and 'You disagree!' if the two strings are different.*/

const agreeOrDisagree = (str1, str2) => {
  if (str1 === str2) {
    return "You agree!";
  } else {
    return "You disagree!";
  }
};
