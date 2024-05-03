// 0 means X 1 means O


let track = [0, 0, 0, 0, 0, 0, 0, 0];
let won = false;
let turn = 1;
let filled = 0;
function Initialize(){

    track = [0, 0, 0, 0, 0, 0, 0, 0];
    won = false;
    turn = 1;
    filled = 0;

    for (let i=1; i<10; i++){
        let ele = document.getElementById("square" + i);
        ele.innerHTML = "";
    }
    screen = document.getElementById("screen");
    screen.innerHTML = "turn of X";


}



const key = {
        1: [0, 3, 6],
        2:[0, 4],
        3:[0, 5, 7],
        4:[1, 3],
        5:[1, 4, 6, 7], 
        6: [1, 5],
        7:[2, 3, 7],
        8:[2, 4], 
        9:[2, 5, 6]
    }



function display(text){
    document.getElementById("screen").innerHTML = text;

}

function game(id){
    console.log(id);
    
    let element = document.getElementById(id);
    if (element.innerHTML != "" || won) return;

    if (turn === 1){
        element.innerHTML = "X";
    }
    else{
        element.innerHTML = "O";
    }
    filled ++;
    

    let number = parseInt(id[id.length - 1]);
    for (let i=0; i<key[number].length; i++){
        track[key[number][i]] += turn*1;
        if (Math.abs(track[key[number][i]]) === 3){
            won = true;
            winn(turn);
            return;
        }
    }
    if (filled === 9){
        display("DRAW!!");
        return;
    }
    if (turn === 1){
        turn = -1;
        display("turn of O");
    }
    else{
        turn = 1;
        display("turn of X");
    }


   
}

function winn(x){
    console.log(x);
    let txt

    if (x === 1){
        txt = "X won !!"
    }
    else{
        txt = "O won !!";
    }
    display(txt);
}