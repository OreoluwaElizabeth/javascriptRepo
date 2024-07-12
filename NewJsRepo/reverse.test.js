const reverseArray = require('./reverseArray.js')

test('reversed', ()=> {
    expect(reverseArray([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1]);
    expect(reverseArray(["Afeez", "Deji"])).toEqual(["Deji", "Afeez"]);
});