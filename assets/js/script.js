// global variables
var quizArea = document.querySelector("#quiz-area")
var quizStart = document.querySelector("#quiz-start")
var quizQuestion = [{ question: "Q1?", a: "answer1", b: "answer2", c: "answer3", d: "answer4", correct: "a" },
{ question: "Q2?", a: "answer1", b: "answer2", c: "answer3", d: "answer4", correct: "b" },
{ question: "Q3?", a: "answer1", b: "answer2", c: "answer3", d: "answer4", correct: "a" },
{ question: "Q4?", a: "answer1", b: "answer2", c: "answer3", d: "answer4", correct: "c" }];
var currentQuestion = 0;

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
answer1.className = "answer-button"
answer1.setAttribute("data-answer", "a")

var answer2 = document.createElement("button");
answer2.className = "answer-button"
answer2.setAttribute("data-answer", "b")

var answer3 = document.createElement("button");
answer3.className = "answer-button"
answer3.setAttribute("data-answer", "c")

var answer4 = document.createElement("button");
answer4.className = "answer-button"
answer4.setAttribute("data-answer", "d")



// TODO add style to question buttons also add types
// create space for answer return
var resultArea = document.createElement("h3");
// TODO add style

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
// result in container
questionContainer.appendChild(resultArea);



var rightAnswer = function () {
    var userAnswer = this.getAttribute("data-answer")

    if (userAnswer === quizQuestion[currentQuestion].correct) {
        alert("yes");

    } else {
        alert("no");
    }
    
    if (currentQuestion === quizQuestion.length - 1) {
        alert("end of quiz")

    } else {
        currentQuestion++;
        promptQuestions();
    }
}

var promptQuestions = function () {

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