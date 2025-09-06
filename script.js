function getComputerChoice(){
    let value = Math.random()
    if(value<=0.33){
        return 'rock'
    }
    else if((value>0.33) && (value<0.66)){
        return 'paper'
    }
    else{
        return 'scissors'
    }
}
function getHumanChoice(){
    let decision=prompt("Enter your decision: (rock/paper/scissors)")
    return decision.toLowerCase()
}

function playRound(humanChoice,computerChoice){
    if((humanChoice=='rock' && computerChoice=='paper')||(humanChoice=='paper' && computerChoice=='scissors') || (humanChoice=='scissors' && computerChoice=='rock')){
        console.log(`You lose! ${computerChoice} wins ${humanChoice}`);
        computerScore++;
    }
    else if(humanChoice==computerChoice){
        console.log("Draw");
    }
    else{
        console.log(`You Win! ${humanChoice} wins ${computerChoice}`)
        humanScore++;
    }
    console.log(`Human Score: ${humanScore} || Computer Score: ${computerScore}`)
}
function playGame(){
    for(let i=0;i<5;i++){
        humanChoice = getHumanChoice();
        computerChoice= getComputerChoice();
        console.log(`Computer value is ${computerChoice}`)
        console.log(`Human value is ${humanChoice}`)
        playRound(humanChoice,computerChoice)
    }
    if(humanScore>computerScore)
        console.log("Hurrayy!! You won")
    else
        console.log("Alas!! You lost")
}
let humanScore=0;
let computerScore=0;
playGame()
