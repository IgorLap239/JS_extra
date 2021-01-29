let num = 266219;
let digits = num.toString().split('');
let realDigits = digits.map(Number);
function arrayProduct(array){
    let product = 1;
    for (var i = 0; i < array.length; i++){
        product *= array[i];
        }
    return product;
}

let arrayProductResult = arrayProduct(realDigits);

console.log(arrayProductResult);

let extent = arrayProductResult ** 3;

let extentDigits = extent.toString().split('');

console.log('Первые две цифры результата: ' + extentDigits[0]+ ', ' + extentDigits[1]);