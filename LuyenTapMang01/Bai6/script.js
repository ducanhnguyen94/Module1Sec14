let numArr = [];
let count = 0;

for (let i = 1; i < 11; i++) {
    let num = Math.round(Math.random() * i * i);
    numArr.push(num);
};


let guessNum = +prompt('Nhap so');

if (numArr.includes(guessNum)) {
    alert(guessNum + 'is in the array');
} else {
    alert(guessNum + 'is not in the array')
};

console.log(numArr);