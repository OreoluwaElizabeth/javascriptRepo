const  Stack  = require('./Stack.js')

test('push', ()=>{
    const stack = new Stack();
    stack.add(1);
    expect(stack.number).toEqual([1]);
});

test('test that i can add more than 2 element', ()=> {
    const addition = new Stack();
    addition.add(1);
    addition.add(2);
    addition.add(3);
    addition.add(4);
    expect(addition.number).toEqual([1, 2, 3, 4]);
});

test('test array element', ()=> {
    const stack = new Stack();
    stack.number = [1, 2, 3, 4,];
    stack.add(5);
    expect(stack.number).toEqual([1, 2, 3, 4, 5]);
});

test('test test', ()=>{
    const string = new Stack();
    string.add("afeez");
    string.add(2);
    string.add("ore");
    expect(string.number).toEqual(["afeez", 2, "ore"]);
});

test('remove element', ()=> {
    const stack = new Stack();
    stack.add(1);
    stack.add(2);
    stack.add(3);
    stack.add(4);
    expect(stack.remove()).toBe(4);
    expect(stack.number).toEqual([1, 2, 3]);
});

test('return element', ()=> {
    const stack = new Stack();
    stack.add(2);
    stack.add(3);
    stack.add(4);
    expect(stack.peek()).toBe(2);
});

test('empty', ()=> {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
    stack.add(1);
    expect(stack.isEmpty()).toBe(false);
});