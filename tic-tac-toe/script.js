let boxes = document.querySelectorAll(".button");
let resetButton = document.querySelector("#reset");
let winnermessage = document.querySelector("#message");
let newgame = document.querySelector("#newgame");
let msg = document.querySelector(".msg");

let player1 = true;

const winnerspatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

boxes.forEach((button, index) => {
    button.addEventListener("click", () => {
        if(player1 === true && button.textContent === ""){
            button.textContent = "X";
            player1 = false;
        }else if ( player1 === false && button.textContent === ""){
            button.textContent = "O";
            player1 = true;
        }
        button.disabled = true;


        checkWinner();

    })
});

const disableButtons = () => {
    for(let button of boxes){
        button.disabled = true;
    }
};

const showWinner = (winner) => {
    winnermessage.textContent = winner + " is the winner";
    msg.classList.remove("hide");
};

const checkWinner = () => {
    for( let pattern of winnerspatterns){
        let position1 = boxes[pattern[0]].textContent;
        let position2 = boxes[pattern[1]].textContent;
        let position3 = boxes[pattern[2]].textContent;

        if(position1 !== "" && position2 !== "" && position3 !== ""){
            if(position1 === position2 && position2 === position3){
                showWinner(position1);
                disableButtons();
            }
        }

}};

const resetGame = () => {
    for(let button of boxes){
        button.textContent = "";
        button.disabled = false;
    }
    msg.classList.add("hide");
};

newgame.addEventListener("click", () => {
    resetGame();
});

resetButton.addEventListener("click", () => {
    resetGame();
});