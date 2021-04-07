
var scoreList = document.createElement("ul");

// ? LOAD HIGHSCORES ON HIGHSCORE PAGE
function loadHighScores() {
    var checkList = localStorage.getItem("hsList");
    if (checkList === null) {
            console.log("empty");
    } else {
        var hsList = JSON.parse(checkList);


        var savedHighScores = hsList.score;
        var savedWhovian = hsList.whovian;
        var scoreArea = document.getElementById("highscores");

        var scoreListTitle = document.createElement("h2");
        scoreListTitle.textContent = "HIGHSCORES";

        var scoreListItem = document.createElement("li");
        scoreListItem.textContent = savedWhovian + savedHighScores;

        scoreList.appendChild(scoreListItem);
        scoreArea.appendChild(scoreListTitle);
        scoreArea.appendChild(scoreList);
    }
}




var deleteScores = document.querySelector("#delete-scores");
deleteScores.addEventListener("click", deleteHighScores);

function deleteHighScores() {
    var confirm = window.confirm("Are you sure?");

    if (confirm) {
        scoreList.remove();
    } else {
        location.reload();
    }
}