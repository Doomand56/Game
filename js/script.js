let buttonOne = document.querySelector('.btn-1');
let buttonTwo = document.querySelector('.btn-2');
let buttonTree = document.querySelector('.btn-3');
let input = document.querySelector('.inp');

let out = document.querySelector('.conteiner-out-2');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function resultRandom() {
    return getRandomIntInclusive(0, 10);
}

let result = resultRandom();

buttonOne.onclick = () => {
    console.log(result);
}

buttonTree.onclick = () => {
    if (result == +input.value) {
        console.log('Greate!');
        out.innerHTML = 
        `<p>Ваше число: ${input.value}</p>
        <p>ПК число: ${result}</p>
        // <p>Вы выиграли!</p>`;
        buttonOne.setAttribute("disabled", "disabled");
        input.setAttribute("disabled", "disabled");
        buttonTree.innerHTML = 'Сыграем ещё раз?';
        buttonTree.onclick = () => {
            location.reload();
        }
    }
    else {
        console.log('False!');
        out.innerHTML = 
        `<p>Ваше число: ${input.value}</p>
        <p>ПК число: ${result}</p>
        <p>Вы проиграли!</p>`;
        buttonOne.setAttribute("disabled", "disabled");
        input.setAttribute("disabled", "disabled");
        buttonTree.innerHTML = 'Сыграем ещё раз?';
        buttonTree.onclick = () => {
            location.reload();
        }
    }
}