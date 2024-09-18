let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) => {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
};
const fromDollarToYen = function(valueInYen) => {
    let valueInYen = valueInEuro * 0.87;
    return valueInYen;
};
const fromYenToEuro = function(valueInEuro) => {
    let valueInPound = valueInEuro * 156.5;
    return valueInEuro;
};

module.export = {sum, fromEuroToDollar, fromDollarToYen, fromYenToEuro };