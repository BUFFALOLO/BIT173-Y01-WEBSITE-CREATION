/* 
   Lakeland Reeds Bed & Breakfast style sheet 
   Filename: script.js

   Author: Lauren Farrell  
   Date: November 26, 2024    
   HTML5 and CSS3 Illustrated Unit M, Lessons
 */

/* create variables */
var fromValue = document.querySelector(".feedback-from");
var feedbackValue = document.querySelector(".feedback-content");
var nameField = document.querySelector("#nameinput");
var feedbackField = document.querySelector("#other-info");
var form = document.querySelector(".contact-form");
var feedbackPreview = document.querySelector(".feedback-preview");
var submitButton = document.querySelector(".submitbutton");

/* add text to preview section */
function completePreview() {
  fromValue.textContent = nameField.value;
  feedbackValue.textContent = feedbackField.value;
  feedbackPreview.className = "feedback=preview show"
  if (form.checkValidity() === true) {
    submitButton.className = "submitbutton show"
  }
}

/*
completePreview();
*/

/* create event listener for changes to form */
form.addEventListener("change", completePreview, false);