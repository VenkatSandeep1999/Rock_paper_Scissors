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
    let decision=prompt("Enter your decision")
    return decision.toLowerCase()
}

let comvalue= getComputerChoice();
console.log(`Computer value is ${comvalue}`)
let hvalue = getHumanChoice();
console.log(`Human value is ${hvalue}`)

let humanScore=0,computerScore=0;

