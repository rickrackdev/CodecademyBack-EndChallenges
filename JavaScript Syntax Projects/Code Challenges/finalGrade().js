/*Write a function, finalGrade(). It should:

take three arguments of type number
find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
0-59 should return: 'F'
60-69 should return: 'D'
70-79 should return: 'C'
80-89 should return: 'B'
90-100 should return: 'A'
*/

const finalGrade = (grade1, grade2, grade3) => {
  if (
    grade1 < 0 ||
    grade1 > 100 ||
    grade2 < 0 ||
    grade2 > 100 ||
    grade3 < 0 ||
    grade3 > 100
  ) {
    return "You have entered an invalid grade.";
  }

  let averageGrade = (grade1 + grade2 + grade3) / 3;
  if (averageGrade >= 0 && averageGrade <= 59) {
    return "F";
  } else if (averageGrade >= 60 && averageGrade <= 69) {
    return "D";
  } else if (averageGrade >= 70 && averageGrade <= 79) {
    return "C";
  } else if (averageGrade >= 80 && averageGrade <= 89) {
    return "B";
  } else if (averageGrade >= 90 && averageGrade <= 100) {
    return "A";
  }
};
