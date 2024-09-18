let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 156.5 yen ", function() {
    const { fromDollarToYen } = require('./app.js');

    const yen = fromDollarToYen();

    const expected = 1.07 * 156.5; 
    
     expect(fromDollarToYen(1.07)).toBe(156.5);
})

test("One yen should be 0.87 euros", function() {
    const { fromYenToEuro } = require('./app.js');

    const euro = fromYenToEuro();

    const expected =  156.5 * 0.87; 
    
     expect(fromEuroToDollar(156.5)).toBe(0.87);
})
module.export = {sum};