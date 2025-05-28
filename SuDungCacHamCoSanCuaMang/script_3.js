const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';

let result = [];

let input = 'The Quick Brown Fox';

for (let i = 0; i < input.length; i++) {
    if (UPPER.indexOf(input[i])  !== -1) {
        result.push(input[i].toLowerCase());
    } else if (LOWER.indexOf(input[i])  !== -1) {
        result.push(input[i].toUpperCase());
    } else {
        result.push(input[i]);
    }
}
console.log(result.join(''));

