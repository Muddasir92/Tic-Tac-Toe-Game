let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("#msg");
let messageContainer = document.querySelector(".messageContainer");
let newGame_btn = document.querySelector("#newGame-btn");
let reseGame_btn = document.querySelector("#reset-btn");

let turnO = true;
let count =0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      console.log("Button Clicked");
      box.innerText = "X";
      turnO = false;
    } else {
      box.innerText = "O";
      turnO = true;
    }
    count++;
    box.disabled = true;
    let iswinner = checkwinner();
    if( count ==9 && !iswinner){
        gameDraw();
    }
  });
});


const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
    count=0;
    messageContainer.classList.add("hide");
}

const disaleBoxes = ()=>{
    for(box of boxes)
    box.disabled = true;
}

const gameDraw= ()=>{
    msg.innerText =   ` The Game was Drawn`;
    messageContainer.classList.remove("hide");
}

const showwinner = (winner)=>{
    msg.innerText = `The Winner of Tic Tac Toe is ${winner}`
    messageContainer.classList.remove("hide");
    disaleBoxes();
}

const checkwinner = () => {
  for (let winner of winPatterns) {
    console.log(winner);
    let pos1Val = boxes[winner[0]].innerText;
    let pos2Val = boxes[winner[1]].innerText;
    let pos3Val = boxes[winner[2]].innerText;
    
    console.log(pos1Val ,pos2Val , pos3Val);
    if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
        if ( pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("winner is ", pos1Val )
            showwinner(pos1Val)
            return true;
    }}

  }

};

newGame_btn.addEventListener("click" , enableBoxes);
reseGame_btn.addEventListener("click" , enableBoxes);