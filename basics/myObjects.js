"use strict";
// Objects in TypeScript can be annotated with specific types
// These types can be inline, type aliases, interfaces, or built-in types
Object.defineProperty(exports, "__esModule", { value: true });
// Inline object type annotation
function createCourse() {
    return {
        name: "TypeScript",
        price: 100,
    };
}
var course = createCourse(); // Type inference
console.log(course);
function createUser(user) {
    console.log("User '".concat(user.name, "' has logged in with email '").concat(user.email, "', active status '").concat(user.isActive, "', and phone number '").concat(user.phoneNumber || "N/A", "'"));
}
createUser({
    _id: "123",
    name: "Joe",
    email: "j@j.com",
    isActive: false,
});
createUser({
    _id: "456",
    name: "Ben",
    email: "b@b.com",
    isActive: true,
    phoneNumber: "123-456-7890",
});
var myUser = {
    _id: "742",
    name: "Billy",
    email: "billy@b.com",
    isActive: true,
};
myUser.name = "Billy Bob";
// myUser._id = '111'; // cannot change _id because it is readonly
console.log(myUser._id);
console.log(myUser === null || myUser === void 0 ? void 0 : myUser.phoneNumber); // Optional chaining
var card = {
    cardNumber: '1234 5678 9012 3456',
    cardDate: '12/23',
    cvv: 123
};
var colors = {
    red: "#f00",
    green: "#0f0",
    blue: "#00f",
};
console.log(colors.red); // "#f00"
