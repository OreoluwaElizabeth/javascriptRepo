function sumEvenNumbers(array) {
    return array.reduce((num, number) => {
        if (number % 2 === 0) {
            return num + number;
        } else {
            return num;
        }
    }, 0);
}