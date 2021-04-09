// ? GLOBAL VARIABLES
var quizArea = document.querySelector("#quiz-area")
var quizStart = document.querySelector("#quiz-start")

var quizQuestion = [{ question: "Q1: Who/What is Bad Wolf?", a: "A scary wolf like Alien", b: "Captain Jack Harkness", c: "Rose Tyler", d: "Donna Noble", correct: "c" },
{ question: "Q2: Who/What is the Face of Boe?", a: "Donna Noble", b: "Rose Tyler", c: "Martha Jones", d: "Captain Jack Harkness", correct: "d" },
{ question: "Q3: The 11th Doctor really likes an odd hat that no one else likes. What is it?", a: "Fedora", b: "Fezz", c: "Top Hat", d: "Deerstalker", correct: "b" },
{ question: "Q4: The first time we meet the Impossible Girl she is trying to bake what?", a: "Soufflés", b: "Cookies", c: "Cupcakes", d: "Darlek Pie", correct: "a" },
{ question: "Q5: Who waited for 1894 years and guarded the Pandorica?", a: "The Doctor", b: "A Cyberman", c: "Rory Williams", d: "Captain Jack Harkness", correct: "c" },
{ question: "Q6: Who is the Doctor's oldest friend?", a: "K9", b: "The Master", c: "Harriet Jones", d: "Rose Tyler", correct: "b" },
{ question: "Q7: What family is the in-laws to the Doctor?", a: "The Nobles", b: "The Jones", c: "The Ponds", d: "The Bryants", correct: "c" },
{ question: "Q8: What makes River Song so special?", a: "She is an archaeologist", b: "She is married to a Time-Lord", c: "She killed the Doctor", d: "Her time line is reversed", correct: "d" },
{ question: "Q9: The 12th Doctor makes a sonic out of?", a: "A guitar", b: "A Cane", c: "Sunglasses", d: "A Watch", correct: "c" },
{ question: "Q10: The 11th doctor enjoys this food after his regeneration?", a: "Fish Sticks and Custard", b: "Bacon", c: "Apples and Peanut Butter", d: "Chips(aka fries)", correct: "a" }];

var currentQuestion = 0;
var quizTimerLength = 100;
var hsList = [];
var gameOver = false;
var tardis = new Audio('tardis.mp3');



// ? Create question container and apply style to the elements 
// create question container
var questionContainer = document.createElement("div");
questionContainer.className = "q-area";
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
        if (!gameOver) {
            quizTimerLength--;
            document.querySelector("#timer-area").textContent = quizTimerLength;

            if (quizTimerLength < 30) {
                document.getElementById("timer-area").style.color = "red";
            }

            if (quizTimerLength === 0) {
                gameOver = true;
                endGame();
            }
        }
    }, 1000);


}

// ? END GAME FUNCTION
function endGame() {
    tardis.pause();
    questionContainer.remove();
    clearInterval(timer);
    // create form elements to submit score and give style 
    var scoreContainer = document.createElement("div");
    scoreContainer.setAttribute("id", "savescore-con");
    var scoreTitle = document.createElement("h2");
    scoreTitle.textContent = "Your score is ";
    scoreTitle.setAttribute("id", "savescore-title")
    var score = document.createElement("span");
    score.textContent = quizTimerLength;
    var scoreForm = document.createElement("form");
    var userLabel = document.createElement("label");
    userLabel.textContent = "Whovian Name:  ";
    userLabel.setAttribute("id", "user-label");
    var userName = document.createElement("input");
    userName.setAttribute("type", "text");
    userName.setAttribute("id", "user-name")
    var saveButton = document.createElement("input");
    saveButton.setAttribute("type", "submit")
    saveButton.setAttribute("id", "savescore-btn")
    var saveGif = document.createElement("img");
    saveGif.setAttribute("src","./assets/images/thumbsup.gif")
    saveGif.setAttribute("id", "savegif")
    // prompt score div 
    scoreForm.appendChild(userLabel);
    scoreForm.appendChild(userName);
    scoreForm.appendChild(saveButton);
    scoreTitle.appendChild(score);
    scoreContainer.appendChild(scoreTitle);
    scoreContainer.appendChild(scoreForm);
    scoreContainer.appendChild(saveGif);
    // put on screen
    quizArea.appendChild(scoreContainer);

    scoreForm.addEventListener("submit", saveScores);
}

// ? SAVE SCORES TO LOCAL STORAGE
function saveScores(event) {
    event.preventDefault();

    var checkList = localStorage.getItem("hsList");
    var savedScores = quizTimerLength;
    var savedNames = document.getElementById("user-name").value;

    if (checkList === null) {

        var scoreObj = JSON.stringify([{ whovian: savedNames, score: savedScores }]);
        var hsList = localStorage.setItem("hsList", scoreObj);

    } else {

        checkList = JSON.parse(checkList);
        console.log(checkList)
        checkList.push({ whovian: savedNames, score: savedScores });
        localStorage.setItem("hsList", JSON.stringify(checkList));

    }

    document.getElementById("user-name").value = "";
    playAgain();
}

function playAgain() {
    window.location.href = "https://jbryant4.github.io/timed-quiz/highscore.html"
}
// ? ANSWER FUNCTION
function rightAnswer() {

    var userAnswer = this.getAttribute("data-answer")

    if (userAnswer === quizQuestion[currentQuestion].correct) {
        var fantastic = new Audio('fantastic.mp3');
        fantastic.play();
    } else {
        quizTimerLength = quizTimerLength - 10;
        // add sound
        var darlek = new Audio('exterminate.mp3');
        darlek.play();
    }
    if (currentQuestion === quizQuestion.length - 1) {
        gameOver = true;
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
    if (quizTimerLength === 100) {
        tardis.loop = true;
        tardis.play();
        tardis.volume = 0.2;

        quizTimer();
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


quizStart.addEventListener("click", promptQuestions);