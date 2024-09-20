let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

test("One euro should be 1.07 dollars", () => {
        // Import the function from app.js
        const { fromEuroToDollar } = require('./app.js');

        // Use the function like its supposed to be used
        const dollars = fromEuroToDollar(3.5);

        // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
        const expected = 3.5 * 1.07;

        // This is the comparison for the unit test
        expect(fromEuroToDollar(3.5)).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
    })

test("3.50 dollar should be 511.91 yen ", () => {
        const { fromDollarToYen } = require('./app.js');

        const yen = fromDollarToYen(3.5);

        const expected = 3.5 / 1.07 * 156.5;

        expect(fromDollarToYen(3.5)).toBe(expected);
    })

test("3.5 Yen should be 1.07 pound", () => {
        const { fromYenToPound } = require('./app.js');

        const pound = fromYenToPound(3.5);

        const expected = 3.5 / 156.5 * .87;

        expect(fromYenToPound(3.5)).toBe(expected);
    })
