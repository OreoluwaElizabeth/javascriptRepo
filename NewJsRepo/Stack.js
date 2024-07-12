class Stack {
    constructor() {
        this.number = [];
    }

    add(element) {
        this.number.push(element);
    }

    remove(){
        return this.number.pop();
    }

    peek() {
        return this.number[0];
    }

    isEmpty() {
        return this.number.length === 0;
    }
}

module.exports = Stack;