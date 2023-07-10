"use strict";
// Functions are a key aspect of TypeScript. Function parameters and return types can be annotated for type safety
Object.defineProperty(exports, "__esModule", { value: true });
// A basic function
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(5)); // output: 7
// Optional parameter with default value
function logUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log("User '".concat(name, "' has logged in with email '").concat(email, "' and paid status '").concat(isPaid, "'"));
}
logUser('Joe', 'joe@gmail.com'); // output: "User 'Joe' has logged in with email 'joe@gmail.com' and paid status 'false'"
logUser('Ben', 'ben@gmail.com', true); // output: "User 'Ben' has logged in with email 'ben@gmail.com' and paid status 'true'"
// Function that throws an error
function fail(msg) {
    throw new Error(msg);
}
function getLength(value) {
    return value.length;
}
console.log(getLength('Hello')); // output: 5
console.log(getLength([1, 2, 3, 4, 5])); // output: 5
// Rest parameters
function sumNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (sum, num) { return sum + num; }, 0);
}
console.log(sumNumbers(1, 2, 3)); // output: 6
console.log(sumNumbers(4, 5, 6, 7)); // output: 22
// Arrow functions
var square = function (num) { return num * num; };
console.log(square(5)); // output: 25
function processData(callback) {
    // Processing data...
    callback(true);
}
processData(function (success) {
    if (success) {
        console.log("Data processed successfully");
    }
    else {
        console.log("Data processing failed");
    }
});
