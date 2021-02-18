'use strict';

const variantA = () => {
    let a = document.getElementById('a');
    let date = new Date();
    let week = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    let strHours;
    let strMinutes;
    let strSeconds;

    if (date.getHours() === 1 || date.getHours() === 21) {
        strHours = 'час';
    } else if (2 <= date.getHours() < 5  || 22 <= date.getHours()) {
        strHours = 'часa';
    } else {
        strHours = 'часов';
    }

    if (date.getMinutes().toString().slice(-1) === 1) {
        strMinutes = 'минута';
    } else if (2 <= date.getMinutes().toString().slice(-1) && date.getMinutes().toString().slice(-1) < 5) {
        strMinutes = 'минуты';
    } else {
        strMinutes = 'минут';
    }

    if (date.getSeconds().toString().slice(-1) === 1) {
        strSeconds = 'секунда';
    } else if (2 <= date.getSeconds().toString().slice(-1) && date.getSeconds().toString().slice(-1) < 5) {
        strSeconds = 'секунды';
    } else {
        strSeconds = 'секунд';
    }

    a.innerHTML = `Сегодня ${week[date.getDay()]}, ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()} года, ${date.getHours()} ${strHours} ${date.getMinutes()} ${strMinutes} ${date.getSeconds()} ${strSeconds}.`; 
};

const variantB = () => {
    let b = document.getElementById('b');
    let date = new Date();
    b.innerHTML = date.toLocaleString();
};

setInterval(variantA, 1000); 
setInterval(variantB, 1000);