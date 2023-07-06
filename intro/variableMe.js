"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Chris";
greetings = greetings.toLowerCase();
console.log(greetings);
// number
var userId = 123;
// inferred number type
var otherId = 542;
// boolean
var isLoggedIn = true;
// Function to process a number
// void means that the function doesn't return anything
function processNumber(value) {
    console.log('Received a number:', value);
}
// Function to process a boolean
function processBoolean(value) {
    console.log('Received a boolean:', value);
}
processNumber(userId);
processNumber(otherId);
processBoolean(isLoggedIn);
//////////////////////////////
// the any type is the most flexible type in TypeScript.
// using any is generally discouraged because it defeats the purpose of using TypeScript.
function processValue(value) {
    if (typeof value === 'number') {
        console.log('Received a number:', value);
    }
    else if (typeof value === 'string') {
        console.log('Received a string:', value);
    }
    else if (typeof value === 'boolean') {
        console.log('Received a boolean:', value);
    }
    else {
        console.log('Received an unknown value:', value);
    }
}
var myValue;
myValue = 42;
processValue(myValue);
myValue = 'Hello, TypeScript!';
processValue(myValue);
myValue = true;
processValue(myValue);
myValue = { foo: 'bar' };
processValue(myValue);
