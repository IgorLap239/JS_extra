'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


let gameBot = function () {

    function getRandomInt() {
        let min = Math.ceil(1);
        let max = Math.floor(100);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    
    }
    
    let myNumber =  getRandomInt();
    console.log (myNumber);
    let i = 10;

    let game = function () {

        let start;

        let counter = function () {
            i = i - 1;
            return i;
        };

        if (i === 1) {

            let newGame = confirm ('Попытки закончились. Хотите сыграть еще раз?');
            if (newGame) {
                gameBot();
            } else {
                return alert('До новых встреч!');
            }

        } else {

            start = prompt('Я загадал число от 1 до 100. Попробуйте его угадать:');

            switch (start) {

                case (null): 

                    alert('Игра окончена');
                    break;

                default: 

                    if (!isNumber(start)) {
                        alert('Введи число!');
                        game();
                    } else if ( +start > myNumber ) {
                        alert('Загаданное число меньше, осталось попыток: ' + counter());
                        game();
                    } else if ( +start < myNumber ) {
                        alert('Загаданное число больше, осталось попыток: ' + counter());
                        game();
                    } else if ( +start === myNumber ) {
                        let newGame = confirm ('Поздравляю, Вы угадали!!! Хотите сыграть еще раз?');
                            if (newGame) {
                                gameBot();
                            } else {
                                alert('До новых встреч!');
                                break;
                            }
                    }
            }
        }
    };

    game();

};

gameBot();