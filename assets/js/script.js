// global variables
var quizArea = document.querySelector("#quiz-area")
var quizStart = document.querySelector("#quiz-start")
var quizQuestion = [{ question: "Q1?", a: "answer1", b: "answer2", c: "answer3", d: "answer4", correct: "a" },
{ question: "Q2?", a: "answer1", b: "answer2", c: "answer3", d: "answer4", correct: "b" },
{ question: "Q3?", a: "answer1", b: "answer2", c: "answer3", d: "answer4", correct: "a" },
{ question: "Q4?", a: "answer1", b: "answer2", c: "answer3", d: "answer4", correct: "c" }];

// console.log(questionEl[0]);
// console.log(questionEl[1]);
// console.log(questionEl[2]);
// console.log(questionEl[3]);

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
console.log(answerList);
// TODO give style to dive 
// create list of buttons for each answer option
var answer1 = document.createElement("button");
var answer2 = document.createElement("button");
var answer3 = document.createElement("button");
var answer4 = document.createElement("button");
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



var promptQuestions = function () {

    questionEl.textContent = quizQuestion[0].question;
    answer1.textContent = quizQuestion[0].a;
    answer2.textContent = quizQuestion[0].b;
    answer3.textContent = quizQuestion[0].c;
    answer4.textContent = quizQuestion[0].d;

    quizArea.appendChild(questionContainer);



}

// event starters 
quizStart.addEventListener("click", promptQuestions);