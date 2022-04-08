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

function resultRandom() {
    return getRandomIntInclusive(0, 10);
}

buttonOne.onclick = () => {
    outComp.textContent = resultRandom();
    console.log(resultRandom());
}
buttonTwo.onclick = () => {
    outMy.textContent = input.value;
}

document.querySelector('.btn-3').onclick = () => {
    if (resultRandom() == input.value) {
        document.querySelector('.conteiner-out-2').innerHTML += '<p>Very good!</p>';
        console.log(resultRandom());
        console.log(+input.value);
    }
    else {
        document.querySelector('.conteiner-out-2').innerHTML += '<p>False!</p>';
        console.log(resultRandom());
        console.log(+input.value);
    }
}