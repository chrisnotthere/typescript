"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    name: "Joe",
    email: "j@j.com",
    isActive: false,
});
createUser({
    name: "Ben",
    email: "b@b.com",
    isActive: true,
    phoneNumber: "123-456-7890",
});
