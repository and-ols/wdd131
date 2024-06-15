import {participantTemplate, successTemplate} from "./Templates.js";

document.addEventListener("click", function () {
   let participant = 1;

   const addButton = document.getElementById("add");
   addButton.addEventListener("click", function () {
       participant++;
       const template = participantTemplate(participant);
       addButton.insertAdjacentHTML("beforebegin", template);
   });

   const registrationForm = document.querySelector("form");
   registrationForm.addEventListener("submit", submitForm);

   function submitForm(event) {
       event.preventDefault();

       const feeTotal = totalFees();
       const adultName = document.getElementById("adult_name").value; 

       hideElement(registrationForm);
       displaySummary(successTemplate({adultName, participant, feeTotal}));
   }

   function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
       let feeElements = document.querySelectorAll("[id^=fee]");
       console.log(feeElements);
       feeElements = [...feeElements];



        // fix this!
       const feeTotal = feeElements.reduce();






       return feeTotal.toFixed(2); 
   }

   function hideElement(element) {
       element.style.display = "none";
   }

   function displaySummary(message) {
       const summaryElement = document.getElementById("summary");
       summaryElement.innerHTML = message;
       summaryElement.style.display = "block";
   }
});