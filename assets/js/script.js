var scoreCount = document.querySelector("#score");
var timerTiktok = document.querySelector("#time");
var submitButton = document.querySelector("#submit-next-btn");
var startButton = document.querySelector("#start-button");
var startQuiz = document.querySelector("#start-page");
var questionsQuiz = document.querySelector("#questions");
var multipleChoice = document.querySelector("#mult-choice");
var quizContainer = document.querySelector(".container");

var scoreLocal = localStorage.getItem("score") || [];

var score = 0;

scoreCount.textContent = score;

var questionOne = "Arrays can store what type of values?";
var questionTwo = "The condition of an if/else statement is enclosed with?";
var questionThree = "The script.js link should be located where?";
var questionFour = "Can arrays be mutated?";
var questionFive = "What is not a common method for array functions?";

// The following code is to start the quiz
startButton.addEventListener("click", function () {
  startQuiz.classList.add("hide");
  startButton.classList.add("hide");
  questionsQuiz.classList.remove("hide");
  timerTiktok.classList.remove("hide");
  submitButton.classList.remove("hide");
  multipleChoice.classList.remove("hide");
  setTime();
  firstQuestion();
});

// The following code is to set the timer for the quiz
var secondsRemaining = 120;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsRemaining--;
    timerTiktok.textContent = secondsRemaining;

    if (secondsRemaining === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

var listEl = document.createElement("ol");

var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// The following code is to display first question and multiple choice answers
function firstQuestion() {
  questionsQuiz.textContent = questionOne;
  var correctAnswer1 = "All the Above";
  console.log(questionsQuiz);
  multipleChoice.appendChild(listEl);

  listEl.appendChild(li1).addEventListener("click", function () {
    li1.setAttribute(
      "style",
      "font-size: 25px; font-weight: bold; text-decoration: underline;"
    );
    console.log("clicked choice 1");
    console.log(li1.textContent);
  });
  listEl.appendChild(li2).addEventListener("click", function () {
    li2.setAttribute(
      "style",
      "font-size: 25px; font-weight: bold; text-decoration: underline;"
    );
    console.log("clicked choice 2");
  });
  listEl.appendChild(li3).addEventListener("click", function () {
    li3.setAttribute(
      "style",
      "font-size: 25px; font-weight: bold; text-decoration: underline;"
    );
    console.log("clicked choice 3");
  });
  listEl.appendChild(li4).addEventListener("click", function () {
    li4.setAttribute(
      "style",
      "font-size: 25px; font-weight: bold; text-decoration: underline;"
    );
    console.log("clicked choice 4");
    score += 5;
  });

  li1.textContent = "Booleans";
  li2.textContent = "Numbers";
  li3.textContent = "Strings";
  li4.textContent = "All the Above";

  submitButton.addEventListener("click", function () {
    console.log("submit answer");
    resetQuiz1();
  });
}

// the following code is to reset state and start next question and multiple choice

function resetQuiz1() {
  submitButton.classList.add("hide");
  questionsQuiz.classList.add("hide");
  timerTiktok.classList.add("hide");
  multipleChoice.classList.add("hide");
  li1.removeAttribute(
    "style",
    "font-size: 25px; font-weight: bold; text-decoration: underline;"
  );
  li2.removeAttribute(
    "style",
    "font-size: 25px; font-weight: bold; text-decoration: underline;"
  );
  li3.removeAttribute(
    "style",
    "font-size: 25px; font-weight: bold; text-decoration: underline;"
  );
  li4.removeAttribute(
    "style",
    "font-size: 25px; font-weight: bold; text-decoration: underline;"
  );
  console.log("delete button worked");
  secondQuestion();
}

// The following code is to display second question and multiple choice answers
function secondQuestion() {
  questionsQuiz.classList.remove("hide");
  questionsQuiz.textContent = questionTwo;
  var correctAnswer2 = "curly braces";
  multipleChoice.appendChild(listEl);
  submitButton.classList.remove("hide");
  multipleChoice.classList.remove("hide");
  timerTiktok.classList.remove("hide");

  listEl.appendChild(li1).addEventListener("click", function () {
    li1.setAttribute(
      "style",
      "font-size: 25px; font-weight: bold; text-decoration: underline;"
    );
    console.log("clicked choice 1");
  });
  listEl.appendChild(li2).addEventListener("click", function () {
    li2.setAttribute(
      "style",
      "font-size: 25px; font-weight: bold; text-decoration: underline;"
    );
    console.log("clicked choice 2");
  });
  listEl.appendChild(li3).addEventListener("click", function () {
    li3.setAttribute(
      "style",
      "font-size: 25px; font-weight: bold; text-decoration: underline;"
    );
    console.log("clicked choice 3");
  });
  listEl.appendChild(li4).addEventListener("click", function () {
    li4.setAttribute(
      "style",
      "font-size: 25px; font-weight: bold; text-decoration: underline;"
    );
    console.log("clicked choice 4");
    score += 5;
  });

  li1.textContent = "Brackets";
  li2.textContent = "parenthesis";
  li3.textContent = "quotes";
  li4.textContent = "curly braces";

  submitButton.addEventListener("click", function () {
    console.log("submit answer");
    resetQuiz2();
  });
}

// Multiple Choice answers 3

function resetQuiz2() {
  submitButton.classList.add("hide");
  questionsQuiz.classList.add("hide");
  timerTiktok.classList.add("hide");
  multipleChoice.classList.add("hide");
  li1.removeAttribute(
    "style",
    "font-size: 25px; font-weight: bold; text-decoration: underline;"
  );
  li2.removeAttribute(
    "style",
    "font-size: 25px; font-weight: bold; text-decoration: underline;"
  );
  li3.removeAttribute(
    "style",
    "font-size: 25px; font-weight: bold; text-decoration: underline;"
  );
  li4.removeAttribute(
    "style",
    "font-size: 25px; font-weight: bold; text-decoration: underline;"
  );
  console.log("delete button worked");
  thirdQuestion();
}

// The following code is to display third question and multiple choice answers
function thirdQuestion() {
  questionsQuiz.classList.remove("hide");
  questionsQuiz.textContent = questionThree;
  var correctAnswer3 = "</body>";
  multipleChoice.appendChild(listEl);
  submitButton.classList.remove("hide");
  multipleChoice.classList.remove("hide");
  timerTiktok.classList.remove("hide");

  listEl.appendChild(li1).addEventListener("click", function () {
    li1.setAttribute(
      "style",
      "font-size: 25px; font-weight: bold; text-decoration: underline;"
    );
    console.log("clicked choice 1");
  });
  listEl.appendChild(li2).addEventListener("click", function () {
    li2.setAttribute(
      "style",
      "font-size: 25px; font-weight: bold; text-decoration: underline;"
    );
    console.log("clicked choice 2");
  });
  listEl.appendChild(li3).addEventListener("click", function () {
    li3.setAttribute(
      "style",
      "font-size: 25px; font-weight: bold; text-decoration: underline;"
    );
    console.log("clicked choice 3");
    score += 5;
  });
  listEl.appendChild(li4).addEventListener("click", function () {
    li4.setAttribute(
      "style",
      "font-size: 25px; font-weight: bold; text-decoration: underline;"
    );
    console.log("clicked choice 4");
  });

  li1.textContent = "</head>";
  li2.textContent = "</footer>";
  li3.textContent = "</body>";
  li4.textContent = "!DOCTYPE";

  submitButton.addEventListener("click", function () {
    console.log("submit answer");
    resetQuiz4();
  });
}

// Multiple Choice answers 4

function resetQuiz4() {
  submitButton.classList.add("hide");
  questionsQuiz.classList.add("hide");
  timerTiktok.classList.add("hide");
  multipleChoice.classList.add("hide");
  li1.removeAttribute(
    "style",
    "font-size: 25px; font-weight: bold; text-decoration: underline;"
  );
  li2.removeAttribute(
    "style",
    "font-size: 25px; font-weight: bold; text-decoration: underline;"
  );
  li3.removeAttribute(
    "style",
    "font-size: 25px; font-weight: bold; text-decoration: underline;"
  );
  li4.removeAttribute(
    "style",
    "font-size: 25px; font-weight: bold; text-decoration: underline;"
  );
  console.log("delete button worked");
  fourthQuestion();
}

// The following code is to display fourth question and multiple choice answers
function fourthQuestion() {
  questionsQuiz.classList.remove("hide");
  questionsQuiz.textContent = questionFour;
  var correctAnswer4 = "Yes";
  multipleChoice.appendChild(listEl);
  submitButton.classList.remove("hide");
  multipleChoice.classList.remove("hide");
  timerTiktok.classList.remove("hide");

  listEl.appendChild(li1).addEventListener("click", function () {
    li1.setAttribute(
      "style",
      "font-size: 25px; font-weight: bold; text-decoration: underline;"
    );
    console.log("clicked choice 1");
  });
  listEl.appendChild(li2).addEventListener("click", function () {
    li2.setAttribute(
      "style",
      "font-size: 25px; font-weight: bold; text-decoration: underline;"
    );
    console.log("clicked choice 2");
    score += 5;
  });
  listEl.appendChild(li3).addEventListener("click", function () {
    li3.setAttribute(
      "style",
      "font-size: 25px; font-weight: bold; text-decoration: underline;"
    );
    console.log("clicked choice 3");
  });
  listEl.appendChild(li4).addEventListener("click", function () {
    li4.setAttribute(
      "style",
      "font-size: 25px; font-weight: bold; text-decoration: underline;"
    );
    console.log("clicked choice 4");
  });

  li1.textContent = "Don't know";
  li2.textContent = "Yes";
  li3.textContent = "No";
  li4.textContent = "All the Above";

  submitButton.addEventListener("click", function () {
    console.log("submit answer");
    resetQuiz5();
  });
}

// Multiple Choice answers 5

function resetQuiz5() {
  submitButton.classList.add("hide");
  questionsQuiz.classList.add("hide");
  timerTiktok.classList.add("hide");
  multipleChoice.classList.add("hide");
  li1.removeAttribute(
    "style",
    "font-size: 25px; font-weight: bold; text-decoration: underline;"
  );
  li2.removeAttribute(
    "style",
    "font-size: 25px; font-weight: bold; text-decoration: underline;"
  );
  li3.removeAttribute(
    "style",
    "font-size: 25px; font-weight: bold; text-decoration: underline;"
  );
  li4.removeAttribute(
    "style",
    "font-size: 25px; font-weight: bold; text-decoration: underline;"
  );
  console.log("delete button worked");
  fifthQuestion();
}

// The following code is to display fifth question and multiple choice answers
function fifthQuestion() {
  questionsQuiz.classList.remove("hide");
  questionsQuiz.textContent = questionFive;
  var correctAnswer5 = "deliver()";
  multipleChoice.appendChild(listEl);
  submitButton.classList.remove("hide");
  multipleChoice.classList.remove("hide");
  timerTiktok.classList.remove("hide");

  listEl.appendChild(li1).addEventListener("click", function () {
    li1.setAttribute(
      "style",
      "font-size: 25px; font-weight: bold; text-decoration: underline;"
    );
    console.log("clicked choice 1");
  });
  listEl.appendChild(li2).addEventListener("click", function () {
    li2.setAttribute(
      "style",
      "font-size: 25px; font-weight: bold; text-decoration: underline;"
    );
    console.log("clicked choice 2");
  });
  listEl.appendChild(li3).addEventListener("click", function () {
    li3.setAttribute(
      "style",
      "font-size: 25px; font-weight: bold; text-decoration: underline;"
    );
    console.log("clicked choice 3");
    score += 5;
  });
  listEl.appendChild(li4).addEventListener("click", function () {
    li4.setAttribute(
      "style",
      "font-size: 25px; font-weight: bold; text-decoration: underline;"
    );
    console.log("clicked choice 4");
  });

  li1.textContent = "push()";
  li2.textContent = "pop()";
  li3.textContent = "deliver()";
  li4.textContent = "splice()";

  submitButton.addEventListener("click", function () {
    
    
    console.log("submit answer");
    endOfQuiz();
  });


function endOfQuiz() {
  quizContainer.classList.add("hide");
  console.log(score);
      document.querySelector("#end-score-message").textContent =
        lastGrade.student + " scored a total " + lastGrade.score;
    
  };
  