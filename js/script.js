let buttonOne = document.querySelector('.btn-1');
let buttonTwo = document.querySelector('.btn-2');
let input = document.querySelector('.inp');

let outComp = document.querySelector('.comp-num');
let outMy = document.querySelector('.my-num');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
buttonOne.onclick = () => {
    outComp.innerHTML = getRandomIntInclusive(0, 10);
}
buttonTwo.onclick = () => {
    outMy.innerHTML = input.value;
}

console.log(outComp);
console.log(outMy);


document.querySelector('.btn-3').onclick = () => {
    if (outComp.value === outMy.value) {
        console.log('Good!');
    }
}