const boxes=document.querySelectorAll('.box');
const gameInfo=document.querySelector('.game-info');
const newGameBtn=document.querySelector('.btn');

let currentPlayer;
let gameGrid;

const winningPosition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
initGame()
function initGame(){
    currentPlayer="X";
    gameGrid=["","","","","","","","",""]
    boxes.forEach((box,index)=>{
        box.textContent="";
        boxes[index].style.pointerEvents='all';
        box.classList=`box box${index+1}`;
    })
    newGameBtn.classList.remove('active');
    gameInfo.textContent=`Curren Player - ${currentPlayer}`;
}  

boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        handleClick(index);
    })
})

function handleClick(index){
    if(gameGrid[index]===""){
        boxes[index].textContent=currentPlayer
        gameGrid[index]=currentPlayer;
        swapTurn();
        checkGameOver();
    }
}

function swapTurn(){
    if(currentPlayer==='X'){
        currentPlayer='0'
    }
    else{
        currentPlayer='X'
    }
    gameInfo.textContent=`Current Player - ${currentPlayer}`
}

newGameBtn.addEventListener("click",initGame);

function checkGameOver(){
    let ans="";
    winningPosition.forEach((position)=>{
        if((gameGrid[position[0]]!=="" && gameGrid[position[0]]!=="" && gameGrid[position[0]]!=="" ) && (gameGrid[position[0]]===gameGrid[position[1]] && gameGrid[position[1]]===gameGrid[position[2]])){
            if(gameGrid[position[0]]==='X'){
                ans='X'
            }
            else{
                ans='0'
            }
            boxes.forEach((box)=>{
                box.style.pointerEvents='none';
            })

            boxes[position[0]].classList.add('win')
            boxes[position[1]].classList.add('win')
            boxes[position[2]].classList.add('win')
        }
    })
    if(ans!==""){
        gameInfo.textContent=`Winner Player - ${ans}`;
        newGameBtn.classList.add('active')
        return;
    }
    let count=0;
    gameGrid.forEach((box)=>{
        if(box!==""){
            count++;
        }
    })
    if(count===9){
        gameInfo.textContent="Game Tied";
        newGameBtn.classList.add('active');
    }
}