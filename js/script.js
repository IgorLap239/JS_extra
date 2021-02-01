'use strict';

let num = 266219;
let digits = num.toString().split('');
let realDigits = digits.map(Number);
function arrayProduct(array) {
    let product = 1;
    for (var i = 0; i < array.length; i++) {
        product *= array[i];
        }
    return product;
}

let arrayProductResult = arrayProduct(realDigits);

console.log(arrayProductResult);

let extent = arrayProductResult ** 3;

let extentDigits = extent.toString().split('');

console.log('Первые две цифры результата: ' + extentDigits[0]+ ', ' + extentDigits[1]);

//дополнительное задание к третьему уроку

//первая задача 

//узнать значение атрибута lang тега html
let lang = document.getElementsByTagName("html")[0].getAttribute("lang");

//вывести названия дней недели на соответствующем языке

//способо с if
if (lang === 'ru') {
    console.log('Пн, Вт, Ср, Чт, Пт, Сб, Вс');
} else {
    console.log('Mon, Tues, Wed, Thurs, Fri, Sat, Sun');
} 

//способ  switch
switch (lang) {
    case "en":
        console.log('Mon, Tues, Wed, Thurs, Fri, Sat, Sun');
        break;
    default: 
        console.log('Пн, Вт, Ср, Чт, Пт, Сб, Вс');
}

//тернарный оператор
lang === "en" ? console.log('Mon, Tues, Wed, Thurs, Fri, Sat, Sun') :
     console.log('Пн, Вт, Ср, Чт, Пт, Сб, Вс');

//вторая задача
let namePerson = prompt("Введите имя");
namePerson === "Артем" ? console.log("Директор") :
    namePerson === "Максим" ? console.log("Преподаватель") : console.log("Студент");
