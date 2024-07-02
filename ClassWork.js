let number = [2,3,5,3,3,2,5];

function sorting(number) {
    let object = {}

    for(let counter = 0; counter < number.length; counter++) {
        let index = number[counter];

        if(index in object){
            object[index] += 1;
        }
        else{
            object[index] = 1;
        }
    }
    return object;
}

console.log(sorting(number))