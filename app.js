let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};

const fromEuroToDollar = (valueInEuro) => {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
};
const fromDollarToYen = (valueInYen) => {
    let valueInYen = valueInDollar * 0.87;
    return valueInYen;
};
const fromYenToEuro = (valueInEuro) => {
    let valueInEuro = valueInYen * 156.5;
    return valueInEuro;
};

module.export = {sum, fromEuroToDollar, fromDollarToYen, fromYenToEuro};