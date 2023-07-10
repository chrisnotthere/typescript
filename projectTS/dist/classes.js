"use strict";
// Classes in TypeScript are similar to those in JavaScript with some additional features
class User {
    constructor(email, name) {
        this.city = 'Delhi'; // Can only be accessed within the class
        this.email = email;
        this.name = name;
    }
}
const janet = new User('1@1.com', 'janet');
console.log(janet);
// janet.city = 'New York'; // Error: 'city' is private
// Another way of writing the above class using shorthand initialization
class newUser {
    constructor(email, // Declare and initialize in the same place
    name) {
        this.email = email;
        this.name = name;
        this.city = 'Bangalore';
    }
}
const john = new newUser('2@2.com', 'john');
console.log(john);
// More complex class with getter, setter, readonly and protected properties
class complexUser {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1; // Can be accessed within the class and subclasses
        this.city = 'Bangalore'; // Can't be changed after initialization
    }
    deleteToken() {
        console.log('Deleting token');
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(coursenum) {
        if (coursenum <= 1) {
            throw new Error('Course count should be greater than 1');
        }
        this._courseCount = coursenum;
    }
}
const karen = new complexUser('karen@mail.com', 'karen');
console.log(karen.getAppleEmail);
console.log(karen.courseCount);
karen.courseCount = 2;
console.log(karen.courseCount);
// Class inheritance using 'extends'
class subComplexUser extends complexUser {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 10;
    }
    // Method overriding
    get getAppleEmail() {
        return `sub${super.getAppleEmail}`;
    }
}
const mike = new subComplexUser('mike@mail.com', 'mike');
console.log(mike.getAppleEmail); // 'subapplemike@mail.com'
// Abstract classes and methods
class AbstractUser {
}
class ConcreteUser extends AbstractUser {
    getUniqueID() {
        return 'unique-id';
    }
}
const concreteUser = new ConcreteUser();
console.log(concreteUser.getUniqueID()); // 'unique-id'
