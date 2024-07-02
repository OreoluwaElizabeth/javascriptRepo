const {testScores} = require('./Task')

test('test correct score',()=>{
    const arr = [76,98,23]
    result = [76,98]
    expect(testScores(arr)).toEqual(result)
})