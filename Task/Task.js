function testScores(result){
    let scoresPassing = result.filter((detail)=>{
        return detail >= 70
    })
    return scoresPassing
}

function tomStudentsScores(scores){
    let increasedScores = scores.map((grade)=>{
        return grade + 5
    })
    return increasedScores
}

function jackNumber(number){
    let squaredJackNumber = number.map((num)=>{
        return num * num
    })
    return squaredJackNumber
}

function sophiaBooks(members, books){
    const array = [];
    for(let member of members){
        let bookIndex = members.indexOf(member);
        const book = books[bookIndex]
        array.push(`${member} gets "${book}"`)
    }
    return array
}

function classTiming(time){
    let afternoonClasses = time.filter((timing)=>{
        return timing.includes("PM") && timing !== "12:00PM"
    })
    return afternoonClasses
}

let expenses = {
    "Groceries": 150,
    "Dinning out": 100,
    "Transportation": 50,
    "Entertainment": 80 
};
let totalAmount = 0;
for(let category in expenses) {
    totalAmount += expenses[category];
}
console.log(`Total amount spent: ${totalAmount}`);


module.exports = {testScores, tomStudentsScores, jackNumber, sophiaBooks, classTiming}


//let testScores = [45, 70, 67, 82, 91, 55, 72, 61, 50, 12];
//let scoresPassing = testScores.filter(grade => grade >= 70);
//console.log(scoresPassing);

//let tomStudentsScores = [85, 92, 78, 88, 95];
//let increasedScores = tomStudentsScores.map(grade => grade + 5);
//console.log(increasedScores);

//let jackNumber = [2, 4, 6, 8, 10];
//let squaredJackNumber = jackNumber.map(num => num * num);
//console.log(squaredJackNumber);

//let sophiaMembers = ["Emily", "Jack", "Sophia", "Daniel"];
//let books = ["Book A", "Book B", "Book C", "Book D"];

//for(let member of sophiaMembers) {
    //let book = books.shift();
    //console.log(`Assigning "${book}" to ${member}`);
//}

//let classTiming = ["9:00AM", "11:00AM", "1:00PM", "3:00PM", "5:00PM"];
//let afternoonClasses = classTiming.filter(time => time.includes("PM") && time !== "12:00PM");
//console.log(afternoonClasses);

//let expenses = {
    //"Groceries": 150,
    //"Dinning out": 100,
    //"Transportation": 50,
    //"Entertainment": 80 
//};
//let totalAmount = 0;
//for(let category in expenses) {
    //totalAmount += expenses[category];
//}
//console.log(`Total amount spent: ${totalAmount}`);