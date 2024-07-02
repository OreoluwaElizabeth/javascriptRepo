function reverseWords(str) {
    let result = [];
    for(let count = str.length - 1; count >= 0; count--){
        result.push(str[count]);
    }
    return result
}

console.log(reverseWords("Semicolon"));
console.log(reverseWords("Oreoluwa"));