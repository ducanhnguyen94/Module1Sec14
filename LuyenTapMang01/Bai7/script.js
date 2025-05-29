let numArr = [];
let count = 0;

for (let i = 1; i < 11; i++) {
    let num = Math.round(Math.random() * i * i);
    numArr.push(num);
};
console.log(numArr);

let guessNum = +prompt('Nhap so');

while (numArr.includes(guessNum)) {
    alert(guessNum + ' is in the array');
    let index = numArr.indexOf(guessNum);
    numArr.splice(index, 1);
    numArr.push(0);
}

console.log(numArr);