let buttonOne = document.querySelector('.btn-1');
let buttonTwo = document.querySelector('.btn-2');
let input = document.querySelector('.inp');

let outComp = document.querySelector('.comp-num');
let outMy = document.querySelector('.my-num');
// outComp = '';
// outMy = '';

buttonOne.onclick = (min, max) => {
    outComp.innerHTML = 'good!';
}
buttonTwo.onclick = (min, max) => {
    outMy.innerHTML = input.value;
}