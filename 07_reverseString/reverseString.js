const reverseString = function(string) {
    let array = string.split("");
    let length = string.length;
    let reverse = Math.floor(length / 2);

    for (let i = 0; i < reverse; i++) {
        let temp = array[i];
        array[i] = array[length - i - 1];
        array[length - i - 1] = temp;
    }

    return array.join("");
}

// Do not edit below this line
module.exports = reverseString;
