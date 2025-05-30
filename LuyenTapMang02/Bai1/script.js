let numArr = [];

for (let i = 0; i < 5; i++) {
    numArr.push([]);
    document.write('Row ' + i + '<br>');
    for (let j = 0; j < 4; j++) {
        let num = Math.round(Math.random() * 100);
        numArr[i].push(num);
        document.write(num + '<br>');
    }
}

console.log(numArr);