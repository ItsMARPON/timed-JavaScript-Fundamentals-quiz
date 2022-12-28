var answerInput = document.querySelector("#multipleAnswers");
var questionForm = document.querySelector("#question-form");
var scoreCount = document.querySelector("#score-count");
var timerTiktok = document.querySelector(".time");

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