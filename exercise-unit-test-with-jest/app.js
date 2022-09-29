function sum(a,b) {
    return a + b
}

console.log(sum(7,3));


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}


const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar/1.2 * 127.9;
    return valueInYen;
}
console.log(fromDollarToYen(2));

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen/127.9 * 0.8
    return valueInPound;
}
    console.log(fromYenToPound(2));


    module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}
