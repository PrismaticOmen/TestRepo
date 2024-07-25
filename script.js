import  {gameEngine} from "./storage.js";
//event listeners not working

const scissorMechanics = document.getElementById("scissorsButton");
scissorMechanics.addEventListener("click", gameEngine("scissors"));

const paperMechanics = document.getElementById("paperButton");
paperMechanics.addEventListener("click", gameEngine("paper"));

const rockMechanics = document.getElementById("rockButton");
rockMechanics.addEventListener("click", gameEngine("rock"));
