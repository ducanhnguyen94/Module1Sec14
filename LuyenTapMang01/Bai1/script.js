let numArr = [];

for (let i = 0; i < 10; i++) {
    let num = +prompt('Nhap so nguyen bat ki');
    numArr.push(num);
}

let count = 0;

numArr.forEach(el => {
    if (el >= 10) {
        count++;
    }
});

alert(count);