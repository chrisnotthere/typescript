"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(5));
// optional parameter with default value
function logUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log("User '".concat(name, "' has logged in with email '").concat(email, "' and paid status '").concat(isPaid, "'"));
}
logUser('Joe', 'joe@gmail.com');
logUser('Ben', 'ben@gmail.com', true);
function logError(error) {
    console.error(error);
}
logError('Something went wrong');
// throws an error and never returns a value
// the never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program
function fail(msg) {
    throw new Error(msg);
}
function getLength(value) {
    return value.length;
}
console.log(getLength('Hello')); // output: 5
console.log(getLength([1, 2, 3, 4, 5])); // output: 5
// rest parameters, allows functions to accept an arbitrary number of arguments
function sumNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (sum, num) { return sum + num; }, 0);
}
console.log(sumNumbers(1, 2, 3)); // output: 6
console.log(sumNumbers(4, 5, 6, 7)); // output: 22
