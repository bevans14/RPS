

var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;
var choices = ["rock", "paper", "scissors"];
var previousScore = 0;


// player choice

window.onload = function(){ // when page loads function starts
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img"); // creates element node and connects it to the DOM
        choice.id = choices[i];
        choice.src = choices[i] + ".png"; // photos match array name
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice); // displays in box
    }
}




function selectChoice(userInp){
    
    you = this.id;
    document.getElementById("your-choice").src = you + ".png"

    opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById("opponent-choice").src = opponent + ".png";

    if (userInp === opponent) {
        yourScore += 1;
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

document.getElementById("your-score").innerText = yourScore;
document.getElementById("opponent-score").innerText = opponentScore;

if (yourScore === previousScore + 1) {
    const winPoint = document.getElementById("winPoint");
    winPoint.play();
}

previousScore = yourScore;

}





function submitUserChoice() {
    var userInp = document.getElementById("input").value.toLowerCase();
    if (choices.includes(userInp)) {
    // Set opponent's choice here
    selectChoice(userInp);
    
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

