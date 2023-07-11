"use strict";
function detectType(val) {
    // The type of val is narrowed from number | string to string within this block
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
// Type narrowing using truthiness check
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}
function printAll(strings) {
    // dont do this!
    // empty string is falsy, so this will print nothing when strings is an empty string
    if (strings) {
        if (typeof strings === "object") {
            for (const s of strings) {
                console.log(s);
            }
        }
        else if (typeof strings === "string") {
            console.log(strings);
        }
    }
}
// use 'in' operator to check if a property exists in an object
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
//////////////////////////////////
// instanceof narrowing
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
logValue("hello world"); // HELLO WORLD
logValue(new Date()); // Tue, 11 Jul 2023 14:25:00 PST
// pet is fish if it has swim method
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet; // pet is Fish
        return "fish food";
    }
    else {
        pet; // pet is Bird
        return "bird Food";
    }
}
// Discriminated unions for exhaustive checks
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            // If the shape doesn't match any of the existing cases, TypeScript raises a compile error.
            // This ensures that all shapes are handled.
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
// If you now run getNewArea function without handling Triangle, you'll get a compile error
// So you need to handle the new case
function getNewArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        case "triangle":
            // shape is narrowed to Triangle within this block
            return (shape.base * shape.height) / 2;
        default:
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
