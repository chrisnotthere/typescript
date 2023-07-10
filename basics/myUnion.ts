// Unions in TypeScript allow you to store different types of values in the same variable
let score: number | string = 10; // score can be either a number or a string
score = 44; // assigning a number
score = "44"; // assigning a string

type User = {
  name: string;
  id: number;
}

type Admin = {
  username: string;
  id: number;
}

// We can create a new variable that could be either of these two types (User or Admin)
let chris: User | Admin = {
  name: "Chris", // chris can be initialized as a User
  id: 0,
}

chris = {
  username: "chris", // or chris can be an Admin
  id: 0,
}

// Union types can also be function parameters
// Here we have a function that can accept either a string or number as its parameter
function getId(id: number | string) {
  console.log(`id is ${id}`)
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // if id is a string, log the uppercase version
  } else {
    console.log(id); // if id is a number, just log it as is
  }
}

// Unions can be used in array types as well
let dataArray: number[] | string[] = [1, 2, 3]; // dataArray can be an array of numbers
dataArray = ["1", "2", "3"]; // or an array of strings

let dataArray2: (number | string)[] = [1, 2, '3']; // dataArray2 is an array that can contain both numbers and strings

// Unions are also useful to limit the exact values that a variable can hold
let pi: 3.14 | 3.1415 = 3.14; // pi can only be 3.14 or 3.1415
pi = 3.1415;

// type assertions
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

