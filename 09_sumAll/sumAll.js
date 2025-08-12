const sumAll = function(a, b) {

    // Check if a or b is negative, or not an integer
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }

    let sum = 0;
    let largerNumber = 0;
    let smallerNumber = 0;

    if (a > b) {
        largerNumber = a;
        smallerNumber = b;
    } else {
        largerNumber = b;
        smallerNumber = a;
    }

    for (let i = smallerNumber; i <= largerNumber; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;