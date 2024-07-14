function getComputerChoice() {
    var valUse = Math.floor(Math.random() * 3);
    switch (true) {
        case (valUse == 0):
            return "Scissors";
            break;
        case (valUse == 1):
            return "Rock";
            break;
        case (valUse == 2):
            return "Paper";
            break;
    }
}

console.log(getComputerChoice());

//I want to make this be able to loop if the choices are not the same
function getHumanChoice()   {
    var valHuman = prompt("Choose Rock Paper or Scissors");
    console.log(valHuman);
    return valHuman;

}

var human_record = getHumanChoice();
var computer_record = getComputerChoice();  
switch(true)    {
    case (human_record == computer_record):
        alert("tie, please refresh");
        break; 
    case ((human_record == "Rock") && (computer_record == "Scissors")):
        alert("win");
        break;
    case ((human_record == "Rock") && (computer_record == "Paper")):
        alert("lose");
        break;
    case ((human_record == "Scissors") && (computer_record == "Rock")):
        alert("lose");
        break;
    case ((human_record == "Scissors") && (computer_record == "Paper")):
        alert("win");
        break; 
    case ((human_record == "Paper") && (computer_record == "Scissors")):
        alert("lose");
        break;     
    case ((human_record == "Paper") && (computer_record == "Rock")):
        alert("win");
        break;
}