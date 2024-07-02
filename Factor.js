input = [4, 6, 9];

function lowestCommonMultiple(number) {
    let lcm = [];
    for(let counter = 2; counter <= number; counter++) {
        for(let count = 0; number % counter === 0; count++) {
            lcm.push(counter);
            number = number / counter;
        }
    }
    return lcm;
}

let array = [1, 2, 3, 4, 5, 6]
array.shift();
console.log(array)

array.unshift(3);
console.log(array)

console.log(lowestCommonMultiple([4, 6, 9]));