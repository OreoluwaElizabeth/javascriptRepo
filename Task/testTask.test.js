const {testScores, tomStudentsScores, jackNumber, sophiaBooks,classTiming} = require('./Task')
  
test('test correct score',()=>{
    const arr = [76,98,23]
    result = [76,98]
    expect(testScores(arr)).toEqual(result)
})

test('test scores upgrade',()=>{
    const grade = [85, 92, 78, 88, 95]
    result = [90, 97, 83, 93, 100]
    expect(tomStudentsScores(grade)).toEqual(result)
})

test('test squared number',()=>{
    const number = [2, 4, 6, 8, 10]
    result = [4, 16, 36, 64, 100]
    expect(jackNumber(number)).toEqual(result)
})

test('test book assigning',()=>{
    const members = ["Emily", "Jack", "Sophia", "Daniel"]
    const books = ["Book A", "Book B", "Book C", "Book D"]
    result = [
        "Emily gets \"Book A\"", 
        "Jack gets \"Book B\"", 
        "Sophia gets \"Book C\"", 
        "Daniel gets \"Book D\"",
    ]
    expect(sophiaBooks(members, books)).toEqual(result)
})

test('test time accurately',()=>{
    const time = ["9:00AM", "11:00AM", "1:00PM", "3:00PM", "5:00PM"]
    result = ["1:00PM", "3:00PM", "5:00PM"]
    expect(classTiming(time)).toEqual(result)
})