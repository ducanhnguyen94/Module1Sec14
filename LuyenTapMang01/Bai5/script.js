let numArr = [];
let count = 0;

for (let i = 0; i < 10; i++) {
    let num = +prompt('Nhap so nguyen bat ki');
    numArr.push(num);
    if (num < 0) {
        count++;
    }
};

console.log(numArr);
console.log(count);
