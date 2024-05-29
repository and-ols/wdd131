function getGrade(inputSelector) {
   const grades = document.querySelector(inputSelector).value;
   const gradesArray = grades.split(",");
   
   const cleanedUpGrades = gradesArray.map((grade) => grade.trim().toUpperCase());

   return cleanedUpGrades;
}

function searchGrade(grade) {
   let gpa = 0;

   if (grade == 'A')
      {
         gpa = 4;
      }
   else if (grade == 'B')
      {
         gpa = 3;
      }
   else if (grade == 'C')
      {
         gpa = 2;
      }
   else if (grade == 'D')
      {
         gpa = 1;
      }
      
   return gpa;
}

function calculateGPA(grades) {
   const convertGradeToGPA = grades.map((grade) => searchGrade(grade));

   const totalGPA = convertGradeToGPA.reduce((total, number) => total + number);
   
   const gpa = totalGPA / convertGradeToGPA.length;
   
   return gpa.toFixed(2);
}

function displayGPA(gpa, selector) {
   const display = document.querySelector(selector);
   display.innerText = gpa;
}

function clickHandler() {
   const grades = getGrade('#grades');

   const gpa = calculateGPA(grades);

   displayGPA(gpa, '#output');
   
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);