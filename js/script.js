'use strict';

const button = document.querySelector('#change'),
    text = document.querySelector('#color'),
    body = document.querySelector('body');


body.style.backgroundColor = '#008d3b';

const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

let changeColor = () => {
    let color = generateRandomColor();
    body.style.backgroundColor = color;
    text.textContent = color;
};

button.addEventListener('click', changeColor);