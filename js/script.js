'use strict';

let test = prompt('Введите тестовый аргумент')

let extraLesson4Function = function (param) {
    if (typeof(param) !== 'string') {
        alert('Введенный аргумент должен быть строкой. Повторите ввод');
        test = prompt('На этот раз введите строку)');
    }

    if (param.length <= 30) {
        return param.trim();
    } else {
        param.trim();
        return (param.substr(0, 29) + '...');
    }   
};

console.log(extraLesson4Function(test));