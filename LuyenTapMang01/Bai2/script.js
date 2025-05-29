let numArr = [];

for (let i = 0; i < 10; i++) {
    let num = +prompt('Nhap so nguyen bat ki');
    numArr.push(num);
};

let numArrSorted = numArr.toSorted((a,b) => a - b);

alert('Vi tri: ' + numArr.indexOf(numArrSorted[9]) + '. So lon nhat: ' + numArrSorted[9]);
