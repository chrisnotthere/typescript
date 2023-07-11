"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// Generic function that accepts a value of any type and returns a value of the same type
function identityThree(val) {
    return val;
}
// Same as identityThree, but with a different type variable name (T instead of Type)
function identityFour(val) {
    return val;
}
identityFour({ brand: "Coke", type: 1 });
// Function that accepts an array of any type and returns the first element
function getSearchProducts(products) {
    return products[0];
}
// Same as above but with arrow syntax
const getMoreSearchProducts = (products) => {
    return products[0];
};
// Function that accepts a value of any type and a value that extends the Database interface
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
anotherFunction(3, {
    connection: "test",
    username: "test",
    password: "test",
});
// Generic class that accepts a type variable T
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
// Use the generic class with a specific type (Quiz)
const test = new Sellable();
test.addToCart({ name: 'test', type: 'test' });
console.log(test.cart); // [{name: 'test', type: 'test'}]
// Use the generic class with another specific type (Course)
const courseSale = new Sellable();
courseSale.addToCart({ name: 'Mathematics', author: 'John Doe', subject: 'Math' });
console.log(courseSale.cart); // [{name: 'Mathematics', author: 'John Doe', subject: 'Math'}]
