function generate(length, width, peice, newpeice) {
    let board = new Array(length).fill(null).map(()=> new Array(width-1).fill(peice).concat(newpeice));
    return board;
}  
console.log(generate(3, 3, "x","o"));
