const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBeCloseTo(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One Dollar should be 106.58 Yens", function() {
    const { fromDollarToYen } = require('./app.js')

    expect(fromDollarToYen(3.5)).toBeCloseTo(373.03, 1);
})

test("One Yen should be 0.006 Pounds", function() {
    const { fromYenToPound } = require('./app.js')

    expect(fromYenToPound(289)).toBeCloseTo(1.7, 0.1); 
})