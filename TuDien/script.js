const input = document.getElementById('input');
const btn = document.getElementById('button');
const result = document.getElementById('result');


let eng = ['go', 'find', 'learn', 'sleep'];
let viet = ['di', 'tim', 'hoc', 'ngu'];

btn.addEventListener('click', () => {
    for (let i = 0; i < eng.length; i++) {
        if (input.value === eng[i]) {
            result.innerHTML = viet[i];
            break;
        } else {
            result.innerHTML = 'Khong tim thay';
        }
    }

})