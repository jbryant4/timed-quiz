// ? GLOBAL VARIABLES
var quizArea = document.querySelector("#quiz-area")
var quizStart = document.querySelector("#quiz-start")
var quizQuestion = [{ question: "Q1?", a: "answer1", b: "answer2", c: "answer3", d: "answer4", correct: "a" },
{ question: "Q2?", a: "answer1", b: "answer2", c: "answer3", d: "answer4", correct: "b" },
{ question: "Q3?", a: "answer1", b: "answer2", c: "answer3", d: "answer4", correct: "a" },
{ question: "Q4?", a: "answer1", b: "answer2", c: "answer3", d: "answer4", correct: "c" }];
var currentQuestion = 0;
var quizTimerLength = 35;



// ? Create question container and apply style to the elements 
// create question container
var questionContainer = document.createElement("div");
// TODO give style to container
// create question element
var questionEl = document.createElement("h2");
//  TODO give style to h2
// create ul to store li
var answerList = document.createElement("div");
answerList.setAttribute("id", "button-list");
// TODO give style to dive 
// create list of buttons for each answer option and give class to all 
var answer1 = document.createElement("button");
answer1.className = "answer-button";
answer1.setAttribute("data-answer", "a");

var answer2 = document.createElement("button");
answer2.className = "answer-button";
answer2.setAttribute("data-answer", "b");

var answer3 = document.createElement("button");
answer3.className = "answer-button";
answer3.setAttribute("data-answer", "c");

var answer4 = document.createElement("button");
answer4.className = "answer-button";
answer4.setAttribute("data-answer", "d");
// TODO add style to question buttons also add types


// In this order create question area 
//  answers => answer list 
answerList.appendChild(answer1);
answerList.appendChild(answer2);
answerList.appendChild(answer3);
answerList.appendChild(answer4);
// question in container
questionContainer.appendChild(questionEl);
// answer list in container
questionContainer.appendChild(answerList);
// ? END OF QUESTION CONTAINER CREATION


// ? TIMER FUNCTION
var timer;
function quizTimer() {
    timer = setInterval(function () {
        quizTimerLength--;
        document.querySelector("#timer-area").textContent = quizTimerLength;
        if (quizTimerLength < 30) {
            document.getElementById("timer-area").style.color = "red";
        }

        if (quizTimerLength < 20) {
            document.getElementById("timer-area").style.fontSize = "30px";
        }

        if (quizTimerLength === 0) {
            endGame();
        }

    }, 1000);


}

// ? END GAME FUNCTION
function endGame() {
    questionContainer.remove();
    clearInterval(timer);
    // create form elements to submit score and give style 
    var scoreContainer = document.createElement("div");
    var scoreTitle = document.createElement("h2");
    scoreTitle.textContent = "Your score is "
    var score = document.createElement("span");
    score.textContent = quizTimerLength;
    var scoreForm = document.createElement("form");
    var userLabel = document.createElement("label");
    userLabel.textContent = "Your Name"
    var userName = document.createElement("input");
    userName.setAttribute("type", "text");
    userName.setAttribute("id", "user-name")
    var saveButton = document.createElement("input");
    saveButton.setAttribute("type", "submit")
    saveButton.setAttribute("id", "savescore-btn")
    // prompt score div 
    scoreForm.appendChild(userLabel);
    scoreForm.appendChild(userName);
    scoreForm.appendChild(saveButton);
    scoreTitle.appendChild(score);
    scoreContainer.appendChild(scoreTitle);
    scoreContainer.appendChild(scoreForm);
    // put on screen
    quizArea.appendChild(scoreContainer);

    scoreForm.addEventListener("submit", saveScores );
}

// ? SAVE SCORES TO LOCAL STORAGE
function saveScores() {

    var savedScores = localStorage.setItem("score", quizTimerLength);
    var savedNames = loacalStorage.setItem("Whovian", document.getElementById("user-name").value);
    

}


// ? ANSWER FUNCTION
function rightAnswer() {

    var userAnswer = this.getAttribute("data-answer")

    if (userAnswer === quizQuestion[currentQuestion].correct) {
        // add sound
    } else {
        quizTimerLength = quizTimerLength - 10;
        // add sound
    }
    if (currentQuestion === quizQuestion.length - 1) {
        endGame();
    }
    else {
        currentQuestion++;
        promptQuestions();
    }
}

// ? PROMPT QUESTIONS FUNCTION
function promptQuestions() {
    quizStart.remove();
    if (quizTimerLength === 35) {
        quizTimer()
    }

    questionEl.textContent = quizQuestion[currentQuestion].question;
    answer1.textContent = quizQuestion[currentQuestion].a;
    answer2.textContent = quizQuestion[currentQuestion].b;
    answer3.textContent = quizQuestion[currentQuestion].c;
    answer4.textContent = quizQuestion[currentQuestion].d;

    quizArea.appendChild(questionContainer);

    document.querySelectorAll(".answer-button").forEach((Element) => {
        Element.addEventListener("click", rightAnswer);
    });


}
// event starters 
quizStart.addEventListener("click", promptQuestions);