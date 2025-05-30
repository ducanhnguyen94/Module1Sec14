let input1 = prompt('Nhap chuoi');
let input2 = prompt('Nhap chuoi');

let input1Arr = input1.split('');
let input2Arr = input2.split('');

let match = true;

let arrL;

if (input1Arr.length > input2Arr.length) {
    arrL = input1Arr.length;
} else {
    arrL = input2Arr.length;
}

for (let i = 0; i < arrL; i++) {
    
    if (input1Arr[i] !== input2Arr[i]) {
        match = false;
        break;
    }

};

if (match) {
    console.log('2 chuoi giong nhau');
} else {
    console.log('2 chuoi khong giong nhau');
};