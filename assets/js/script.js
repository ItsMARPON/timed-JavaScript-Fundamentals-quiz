var answerInput = document.querySelector("#multipleAnswers");
var scoreCount = document.querySelector("#score");
var timerTiktok = document.querySelector("#time");
var submitButton = document.querySelector("#submit-next-btn");
var startButton = document.querySelector("#start-button");

var count = 0;

var totalScore = [];

var questionOne = "Arrays can store what type of values?"
var questionTwo = "The condition of an if/else statement is enclosed with?"
var questionThree = "The script.js link should be located where?"
var questionFour = "Can arrays be mutated?"
var questionFive = "What are common methods for array functions?"



// The following code is to start the quiz
startButton.addEventListener("click", function() {
  console.log("click");
});

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

// The following code is to display next question

// The following code is to select answer


// submitButton.addEventListener("click", );
/*
// The following code is to create a list of multiple choice answers for 5 questions
// Multiple Choice answers 1
var listEl = document.createElement("ol");

var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

answerInput.appendChild(listEl);

listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

li1.textContent = "Booleans";
li2.textContent = "numbers";
li3.textContent = "strings";
li4.textContent = "All the Above";

// Multiple Choice answers 2

answerInput.appendChild(listEl);

listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

li1.textContent = "Brackets";
li2.textContent = "parenthesis";
li3.textContent = "quotes";
li4.textContent = "curly brackets";

// Multiple Choice answers 3

answerInput.appendChild(listEl);

listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

li1.textContent = "</head>";
li2.textContent = "</footer>";
li3.textContent = "</body>";
li4.textContent = "!DOCTYPE";

// Multiple Choice answers 4

answerInput.appendChild(listEl);

listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

li1.textContent = "Don't know";
li2.textContent = "Yes";
li3.textContent = "No";
li4.textContent = "All the Above";

// Multiple Choice answers 5

answerInput.appendChild(listEl);

listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

li1.textContent = "push()";
li2.textContent = "pop()";
li3.textContent = "deliver()";
li4.textContent = "splice()";




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

*/