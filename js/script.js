'use strict';

let arr = ['4939', '123', '2558', '1311', '987', '567', '45'];

for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[i][0] === '4' ||arr[i][0] === '2' ) {
        console.log( +arr[i] );
    }
}

label: for (let x = 2; x <= 100; x++) {
    for (let y = 2; y < x; y++) {

        if (x % y == 0)  {
        continue label;
        }
    }
    console.log ('Простое число: ' + x + '. Делится на 1 и на ' + x);
}