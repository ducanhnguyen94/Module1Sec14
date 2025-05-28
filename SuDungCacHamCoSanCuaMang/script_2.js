let numStr = "025468";
let numArr = numStr.split('');

for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 == 0 && numArr[i+1] % 2 == 0) {
        numArr.splice(i+1, 0, '-');
    }
};

console.log(numArr.join(''));