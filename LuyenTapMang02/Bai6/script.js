let input = prompt('Nhap chuoi');

let inputArr = input.split('');

for (let i = 0; i < inputArr.length; i++) {

    if (inputArr[i] === '-') {
        let num = Number(inputArr[i+1]);
        if (Number.isNaN(num)) {
            inputArr[i] = '_';
        }
    };


};

console.log(inputArr.join(''));