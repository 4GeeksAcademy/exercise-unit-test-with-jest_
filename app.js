// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYenn = function(valueInDollar) {
    // Convert the given valueInEuro to dollars
    let valueInYen = fromEuroToDollar(valueInDollar) * 156.5;
    // return the yen value
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.0072;
    return valueInPound; 
}
console.log(fromYenToPound(100));
// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)


// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar }
