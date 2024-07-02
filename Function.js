
function calculateArea(width, height) {
    return width * height;
}
const area = calculateArea(5, 2);
console.log(area)

function convertToFahrenheit(celsius){
    return celsius * 9/5 + 32;
}
const convertCelsius = convertToFahrenheit(25);
console.log(convertCelsius)

function isEven(number){
    if(number % 2 == 0) {
        return true;
    } else {
        return false
    }
}

const num = isEven(12);
const number = isEven(9);
console.log(num)
console.log(number)

function isLeapYear(year){
    if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        return true;
    } else {
        return false;
    }
}
    const result = isLeapYear(2004);
    const result2 = isLeapYear(1999);
    console.log(result)
    console.log(result2)

function countVowels(str){
    const vowels = 'aeiouAEIOU';
    let count = 0
    for(let counter = 0; counter < str.length; counter++){
        if(vowels.includes(str[counter])){
            count++;
        }   
    }
    return count;
}     
    const letter = countVowels('kenneth');
    const letter2 = countVowels('oreoluwa');
    const letter3 = countVowels('david');
    console.log(letter)
    console.log(letter2)
    console.log(letter3)  
