

var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;
var choices = ["rock", "paper", "scissors"];
var previousScore = 0;
var opponentPrevScore = 0; 
winLose = ''; // empty string because the words displayed will be modified

window.onload = function(){ 
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png"; 
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

// This function determines the winner

function selectChoice(userInp){ // Userinp will only run when called
    
    you = this.id;
    document.getElementById("your-choice").src = you + ".png"

    opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById("opponent-choice").src = opponent + ".png";

    if (userInp === opponent) { // this works because of the paramater in line 24. "===" is absolute.
        yourScore += 1; // Score was initially set to 0 and because it's not const, the value is increased by 1
        opponentScore += 1; 
    }
    else {
        if (userInp === "rock") {
            if (opponent === "scissors") {
                yourScore += 1;
              }
            else if (opponent === "paper") {
                opponentScore +=1;
            }
        }
        else if (userInp === "scissors") {
            if (opponent === "paper") {
                yourScore += 1;
            }
            else if (opponent === "rock") {
                opponentScore +=1;
            }
        }
       else if (userInp === "paper") {
            if (opponent === "rock") {
                yourScore += 1;
            }
            else if (opponent === "scissors") {
                opponentScore +=1;
            }
        }
    

    }

if (you === opponent) {
    yourScore += 1;
    opponentScore += 1;

}
else {
    if (you === "rock") {
        if (opponent === "scissors") {
            yourScore += 1;

        }
        else if (opponent === "paper") {
            opponentScore +=1;
        }
    }
    else if (you === "scissors") {
        if (opponent === "paper") {
            yourScore += 1;

        }
        else if (opponent === "rock") {
            opponentScore +=1;
        }
    }
   else if (you === "paper") {
        if (opponent === "rock") {
            yourScore += 1;
        }
        else if (opponent === "scissors") {
            opponentScore +=1;
        }
    }

}

if (yourScore === previousScore + 1 && opponentScore === opponentPrevScore + 1) {
    winLose = "You Tied!";
    winPoint.play();
// if both scores go up, winPoint audio will play and "You Tied!" will display.
}

else if (opponentScore == opponentPrevScore) {
    const winPoint = document.getElementById("winPoint");
    winPoint.play();
    winLose = "You Won!"
}
else if (opponentScore === opponentPrevScore + 1)
    {
        winLose = "You Lost!"
    }
   
document.getElementById("your-score").innerText = yourScore;
document.getElementById("opponent-score").innerText = opponentScore;
document.getElementById("WL").innerText = winLose
previousScore = yourScore;
opponentPrevScore = opponentScore;

// Connecting the DOM allows for JavaScript to know what to grab.

}
function submitUserChoice() {
    var userInp = document.getElementById("input").value.toLowerCase();
    if (choices.includes(userInp)) {
    selectChoice(userInp); // if userinput is rock, paper, or scissors, selectChoice function will run
    
    } else {
        alert("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");

    }

    document.getElementById("your-choice").src = userInp + ".png";
    document.getElementById("opponent-choice").src = opponent + ".png";

}


function mute(){
    if(jazz.muted == false){
      jazz.muted = true;
    } else {
      jazz.muted = false;
    }
}

