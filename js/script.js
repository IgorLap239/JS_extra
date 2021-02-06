'use strict';

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'];

let date = new Date();

let outWeek = document.getElementById('out_week');
let str = ' ';

let getEuDay = function () {
    let y;
    if (date.getDay() >= 1) {
        y = date.getDay() - 1;
    } else if (date.getDay() === 0) {
        y = 6;
    }
    return y;
};

for (let i = 0; i < week.length; i++) {
    if ( i !== 5 && i !== 6 && i !== getEuDay() ) {
        str += week[i] + '<br>';
    } else if ( i !== getEuDay() && (i === 5 || i === 6) ) {
        str += '<i>' + week[i] + '</i>' + '<br>';
    } else if ( i === getEuDay() && i !== 5 && i !== 6 ) {
        str += '<b>' + week[i] + '</b>' + '<br>';
    } else if ( i === getEuDay() && (i === 5 || i === 6) ) {
        str += '<b>' + '<i>' + week[i] + '</i>' + '</b>' + '<br>';
    }
}

outWeek.innerHTML = str;