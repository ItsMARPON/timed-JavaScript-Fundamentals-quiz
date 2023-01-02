var scoreCount = document.querySelector("#score");
var timerTiktok = document.querySelector("#time");
var submitButton = document.querySelector("#submit-next-btn");
var startButton = document.querySelector("#start-button");
var startQuiz = document.querySelector("#start-page");
var questionsQuiz = document.querySelector("#questions");
var multipleChoice = document.querySelector("#mult-choice");

var count = 0;

var count = localStorage.getItem("count");

scoreCount.textContent = count;

var questionOne = "Arrays can store what type of values?"
var questionTwo = "The condition of an if/else statement is enclosed with?"
var questionThree = "The script.js link should be located where?"
var questionFour = "Can arrays be mutated?"
var questionFive = "What are common methods for array functions?"

// The following code is to start the quiz
startButton.addEventListener("click", function() {
  startQuiz.classList.add('hide');
  startButton.classList.add('hide');
  questionsQuiz.classList.remove('hide');
  timerTiktok.classList.remove('hide');
  submitButton.classList.remove('hide');
  multipleChoice.classList.remove('hide');
setTime();
firstQuestion();
});


// The following code is to set the timer for the quiz
var secondsRemaining = 60;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsRemaining--;
    timerTiktok.textContent = secondsRemaining;

    if(secondsRemaining === 0) {
      clearInterval(timerInterval);
    }

  }, 1200);
};

var listEl = document.createElement("ol");

var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// The following code is to display first question and multiple choice answers
function firstQuestion () {
 questionsQuiz.append(questionOne);
 multipleChoice.appendChild(listEl);


listEl.appendChild(li1).addEventListener("click", function(){
  li1.setAttribute("style", "font-size: 25px; font-weight: bold; text-decoration: underline;")
  console.log("clicked choice 1");

});
listEl.appendChild(li2).addEventListener("click", function (){
  li2.setAttribute("style", "font-size: 25px; font-weight: bold; text-decoration: underline;")
 console.log("clicked choice 2");
});
listEl.appendChild(li3).addEventListener("click", function (){
  li3.setAttribute("style", "font-size: 25px; font-weight: bold; text-decoration: underline;")
  console.log("clicked choice 3");
});
listEl.appendChild(li4).addEventListener("click", function (){
  li4.setAttribute("style", "font-size: 25px; font-weight: bold; text-decoration: underline;")
  console.log("clicked choice 4");
  }
);

li1.textContent = "Booleans";
li2.textContent = "Numbers";
li3.textContent = "Strings";
li4.textContent = "All the Above";

};


// the following code is to reset state and start next question and multiple choice

/*
function resetQuiz () {
  submitButton.classList.add('hide');
  console.log("delete button worked");
}

// The following code is to select answer
submitButton.addEventListener("click", function(event) {
  var element = event.target;
  console.log("event");
});
*/

/*
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
  console.log(scoreCount === 1);
} else {
  console.log(scoreCount === 0);
}

// code is to add score to total score count
function calculateTotal(total, scoreCount) {
  return parseFloat(total) + parseFloat(scoreCount);
}
calculateTotal()

*/