const line0 = document.getElementById('line0');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');
const btn = document.getElementById('play');
let gameX = [];
let gameO = [];
let turn = 1;

let arr = [['(.)','(.)','(.)','(.)','(.)'],['(.)','(.)','(.)','(.)','(.)'],['(.)','(.)','(.)','(.)','(.)'],['(.)','(.)','(.)','(.)','(.)'],['(.)','(.)','(.)','(.)','(.)']];

line0.innerHTML = arr[0].join(' ');
line1.innerHTML = arr[1].join(' ');
line2.innerHTML = arr[2].join(' ');
line3.innerHTML = arr[3].join(' ');
line4.innerHTML = arr[4].join(' ');



function showLine() {
    line0.innerHTML = arr[0].join(' ');
    line1.innerHTML = arr[1].join(' ');
    line2.innerHTML = arr[2].join(' ');
    line3.innerHTML = arr[3].join(' ');
    line4.innerHTML = arr[4].join(' ');
}

function play() {
         
        let x = prompt('Nhap x');
        let y = prompt('Nhap y');
        
        if (turn == 1) {
            arr[x][y] = 'x';
            gameX.push(x + y);
            turn++;
            showLine();
        } else {
            arr[x][y] = 'o';
            gameO.push(x + y);
            turn--;
            showLine();
        };

}

function checkWinner() {
    gameX.sort();
    gameO.sort();
    let winnerCountX = 0;
    let winnerCountO = 0;

    for (let i = 1; i < gameX.length; i++) {

        if (gameX[i][0] === gameX[i-1][0] && Number(gameX[i][1]) === Number(gameX[i-1][1]) + 1) {
            winnerCountX++;
            if (winnerCountX == 2) {
                alert('X win');
                return;
            }
        } else if (Number(gameX[i][0]) === Number(gameX[i-1][0]) + 1 && gameX[i][1] === gameX[i-1][1]) {
            winnerCountX++;
            if (winnerCountX == 2) {
                alert('X win');
                return;
            }
        } else if (Number(gameX[i][0]) === Number(gameX[i-1][0]) + 1 && Number(gameX[i][1]) === Number(gameX[i-1][1]) + 1) {
            winnerCountX++;
            if (winnerCountX == 2) {
                alert('X win');
                return;
            }
        }
    };

    for (let j = 1; j < gameO.length; j++) {
        
        if (gameO[j][0] === gameO[j-1][0] && Number(gameO[j][1]) === Number(gameO[j-1][1]) + 1) {
            winnerCountO++;
            if (winnerCountO == 2) {
                alert('O win');
                return;
            };
        } else if (Number(gameO[j][0]) === Number(gameO[j-1][0]) + 1 && gameO[j][1] === gameO[j-1][1]) {
            winnerCountO++;
            if (winnerCountO == 2) {
                alert('O win');
                return;
            };
        } else if (Number(gameO[j][0]) === Number(gameO[j-1][0]) + 1 && Number(gameO[j][1]) === Number(gameO[j-1][1]) + 1) {
            winnerCountO++;
            if (winnerCountO == 2) {
                alert('O win');
                return;
            };
        }
    };
};

btn.addEventListener('click', () => {
    play();
    checkWinner();
})