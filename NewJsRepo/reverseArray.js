function reverseArray(number){
    const reversedElements = [];
    for (let count = 0; count < number.length; count++) {
        reversedElements.unshift(number[count]);
    }
    return reversedElements;
}

module.exports = reverseArray;