function play() {
    const playerChoice = confirm("Do you wanna play Stone, Paper, Scissor ?");
    playerChoice === true ? startGame() : alert("Okay, Thank you...");
}

function startGame() {
    alert("Read the rules carefully !");
    alert("If you wanna choose #STONE enter 0.");
    alert("If you wanna choose #PAPER enter 1."); 
    alert("If you wanna choose #SCISSOR enter 2.");
    const choice = playerInput();
    if(choice)
    {
        checkChoice(choice);
    }
    else
    {
        alert("You have quitted the game !");
    }
}
function playerInput() {
    return Number(prompt("Enter your correct choice : "));
}

function checkChoice(choice) {
    if(choice == 0 || choice == 1 || choice == 2)
    {
        playFurther(choice);
    }
    else
    {
        alert("Enter the valid choice !");
        startGame();
    }
}

function playFurther(choice) {
    const items = ["STONE", "PAPER", "SCISSOR"];
    const pChoice = items[choice];
    const cChoice = items[computerChoice()];
    result(pChoice,cChoice);
}

function computerChoice() {
    return Math.floor(Math.random()*3);
}

function result(pChoice,cChoice) {
    const result = pChoice == cChoice ? "Match Draw" : pChoice == "STONE" && cChoice == "PAPER" ? "You 'Stone' & Computer 'Paper', So Computer Won The Match." : pChoice == "PAPER" && cChoice == "SCISSOR" ? "You 'Paper' & Computer 'Scissor', So Computer Won The Match." : pChoice == "SCISSOR" && cChoice == "PAPER" ? "You 'Scissor' & Computer 'Paper', So You Won The Match." : "You 'Paper' & Computer 'Stone', So You Won The Match.";
    alert(result);
    const ask = confirm("Do you wanna play again ???");
    ask === true ? playerInput() : alert("Thanks for playing...")
}

play()