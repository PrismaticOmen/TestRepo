

function computerSelect()   {
    switch(Math.floor(Math.random() * 3))    {
        case(0):
            return "scissors";
            break;
        
        case(1):  
            return "rock";
            break;
        
        case(2):
            return "paper";
            break;
        
    };
    
}
function gameEngine(chosenStr)  {
    chosenStr = chosenStr.toLowerCase();
    var varUseComputer = computerSelect();
    switch(true)    {
        case(chosenStr == varUseComputer):
            alert("tie");
            break;
        case ((varUseComputer == "rock") && (chosenStr == "scissors")):
            alert("lose");
            break;
        case ((varUseComputer == "rock") && (chosenStr == "paper")):
            alert("win");
            break;
        case ((varUseComputer == "scissors") && (chosenStr == "rock")):
            alert("win");
            break;
        case ((varUseComputer == "scissors") && (chosenStr == "paper")):
            alert("lose");
            break; 
        case ((varUseComputer == "paper") && (chosenStr == "scissors")):
            alert("win");
            break;     
        case ((varUseComputer == "paper") && (chosenStr == "rock")):
            alert("lose");
            break;   
    }
    return;
};

export  {computerSelect, gameEngine};

