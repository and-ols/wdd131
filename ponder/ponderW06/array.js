//  arrays.js

//                ACTIVITY 1
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join();


//                ACTIVITY 2
const grades = ['A', 'B', 'A'];

function convertGradeToGPA(grade) {
   let gpa = 0;

   if (grade == 'A')
      {
         gpa = 4;
      }
   else if (grade == 'B')
      {
         gpa = 3;
      }
   return gpa;

}
const gradeGPA = grades.map(convertGradeToGPA);


//                ACTIVITY 3
const totalGPA = gradeGPA.reduce((total, selected) => total + selected);
const gpa = totalGPA / gradeGPA.length;


//                ACTIVITY 4
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const smallerWords = fruits.filter((fruit) => fruit.length < 6);


//                ACTIVITY 5
const numbers = [12, 34, 21, 54];
const luckyNumber = 21;

let checkForLucky = numbers.indexOf(luckyNumber);