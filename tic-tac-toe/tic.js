let winPattern = [
    [0,1,2],//-
    [3,4,5],//-
    [6,7,8],//-
    [0,3,6],//|
    [1,4,7],//|
    [2,5,8],//|
    [0,4,8],// \
    [2,4,6]// /
];
//0 = available, 1 = X, 2 = O
let gameBoard = [0,0,0,0,0,0,0,0,0];
//1 = X win, 2 = O Win
let winnerLogs = [];
let endGame = false;

function updateGameBoard(idx){
    gameBoard[idx] = turn%2==0?1:2;
}

//true => Available false => occupy
function checkAvailable(idx){
    return gameBoard[idx] == 0;
}

function checkWin(){
    let isWin = false;
    let idx = 0;
    while(!isWin){
        const pattern = winPattern[idx]; //idx = 0, [0,1,2]
        if ( (gameBoard[pattern[0]] === gameBoard[pattern[1]]) && //AND
        (gameBoard[pattern[1]] === gameBoard[pattern[2]])){
            isWin = gameBoard[pattern[0]] > 0?true:false;
            if(isWin){
                addWinLog();
                const XWin = winnerLogs.reduce((acc,mark)=>{
                    return mark==1?acc+1:acc;
                },0);
                const OWin = winnerLogs.reduce((acc,mark)=>{
                    return mark==2?acc+1:acc;
                },0);
                document.querySelector("#XWin").innerHTML = XWin;
                document.querySelector("#OWin").innerHTML = OWin;
                endGame = true;
            }
        }
        idx++;
        if (idx >= 8){
            break;
        }
    }
    return isWin;
}

function addWinLog(){
    winnerLogs.push(turn%2==0?1:2);
}

//if even#, turn % 2 = 0, X
//if odd# , turn % 2 > 0, O
let turn = 0;
const cells = document.querySelectorAll("div#gameboard > div#board > div.grid");
for(let cell of cells){
    cell.addEventListener('click',(event)=>{
        const id = event.currentTarget.id.replace("cell",""); //cell0,cell1,....
        const idx = parseInt(id);
        if (checkAvailable(idx) && !endGame){
            if (turn % 2 == 0) {
                event.currentTarget.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                event.currentTarget.innerHTML = '<i class="far fa-circle"></i>';
            }
            updateGameBoard(idx);
            if (checkWin()){
                alert(`${turn % 2 == 0?"X":"O"} win!`);
            }
            turn++;//<----
            if (turn % 2 == 0){
                document.querySelector("#currentPlayer").innerHTML = '<i class="fas fa-times"></i>';
            }else{
                document.querySelector("#currentPlayer").innerHTML = '<i class="far fa-circle"></i>';
            }
        }
    })
}

document.querySelector("#restart").addEventListener("click",(event)=>{
    gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const cells = document.querySelectorAll("div#gameboard > div#board > div.grid");
    for (let cell of cells) {
        cell.innerHTML = '';
    }
    endGame = false;
    turn = 0;
    document.querySelector("#currentPlayer").innerHTML = '<i class="fas fa-times"></i>';
});

document.querySelector("#currentPlayer").innerHTML = '<i class="fas fa-times"></i>';
