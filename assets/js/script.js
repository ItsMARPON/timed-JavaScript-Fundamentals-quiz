var answerInput = document.querySelector("#multipleAnswers");
var questionForm = document.querySelector("#question-form");
var scoreCount = document.querySelector("#score");
var timerTiktok = document.querySelector(".time");
var submitButton = document.querySelector("#submit");

var count = 0;

var totalScore = [];
// The following code is to set the timer for the quiz
var secondsRemaining = 500;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsRemaining--;
    timerTiktok.textContent = secondsRemaining;

    if(secondsRemaining === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}
setTime()

// The code is listen for clicks on submit button
// submitButton.addEventListener("click", );

// The following code is to create a list of multiple choice questions
var listEl = document.createElement("ol");

var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

questionForm.appendChild(listEl);

listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

li1.textContent = "Booleans";
li2.textContent = "numbers";
li3.textContent = "strings";
li4.textContent = "All the Above";

//code is to assign points to correct answers
if(answerInput === li4) {
  console.log(scoreCount === 5);
} else {
  console.log(scoreCount === 0);
}

// code is to add score to total score count
function calculateTotal(total, scoreCount) {
  return parseFloat(total) + parseFloat(scoreCount);
}
calculateTotal()