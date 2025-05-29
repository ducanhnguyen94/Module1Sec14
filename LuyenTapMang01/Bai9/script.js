let a = [];
let b = [];
let c = [];

for (let i = 1; i <= 10; i++) {
    let num = Math.round(Math.random() * 10);
    a.push(num);
    b.push(num + 1);
    c.push(num + 2);
};

let abc = c.concat(b , a);
console.log(a);
console.log(b);
console.log(c);
console.log(abc);