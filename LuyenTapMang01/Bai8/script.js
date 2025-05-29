let numArr = [];
let sum = 0;

for (let i = 0; i < 10; i++) {
    let num = +prompt('Nhap so nguyen bat ki');
    sum += num;
    numArr.push(num);
};

let numArrSorted = numArr.toSorted((a,b) => a - b);


console.log(numArr);
alert(numArrSorted.reverse());
