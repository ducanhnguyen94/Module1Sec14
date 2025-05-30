let input = prompt('Nhap chuoi');

let inputArr = input.split('');

let count = 0;

console.log(inputArr.length);

inputArr.forEach(el => {
    console.log(el + ' ' + count);
    count++;
}
)