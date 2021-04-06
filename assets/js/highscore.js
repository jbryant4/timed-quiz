// ? LOAD HIGHSCORES ON HIGHSCORE PAGE
function loadHighScores() {

    var savedHighScores = localStorage.getItem("score");
    var savedWhovian = localStorage.getItem("Whovian");
    var scoreArea = document.getElementById("highscores");

    var scoreListTitle = document.createElement("h2");
    scoreListTitle.textContent = "HIGHSCORES";
    var scoreList = document.createElement("ul");
    var scoreListItem = document.createElement("li");
    scoreListItem.textContent = savedWhovian + savedHighScores;

    scoreList.appendChild(scoreListItem);
    scoreArea.appendChild(scoreListTitle);
    scoreArea.appendChild(scoreList);
}

