// Functions are a key aspect of TypeScript. Function parameters and return types can be annotated for type safety

// A basic function
function addTwo(num: number): number {
  return num + 2;
}
console.log(addTwo(5)); // output: 7

// Optional parameter with default value
function logUser(name: string, email: string, isPaid: boolean = false): void {
  console.log(`User '${name}' has logged in with email '${email}' and paid status '${isPaid}'`);
}

logUser('Joe', 'joe@gmail.com'); // output: "User 'Joe' has logged in with email 'joe@gmail.com' and paid status 'false'"
logUser('Ben', 'ben@gmail.com', true); // output: "User 'Ben' has logged in with email 'ben@gmail.com' and paid status 'true'"

// Function that throws an error
function fail(msg: string): never {
  throw new Error(msg);
}

// Function overloading
function getLength(value: string): number;
function getLength(value: any[]): number;
function getLength(value: string | any[]): number {
  return value.length;
}
console.log(getLength('Hello')); // output: 5
console.log(getLength([1, 2, 3, 4, 5])); // output: 5

// Rest parameters
function sumNumbers(...numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumNumbers(1, 2, 3)); // output: 6
console.log(sumNumbers(4, 5, 6, 7)); // output: 22

// Arrow functions
const square = (num: number): number => num * num;
console.log(square(5)); // output: 25

// Callback function type
type Callback = (success: boolean) => void;
function processData(callback: Callback): void {
  // Processing data...
  callback(true);
}

processData((success) => {
  if (success) {
    console.log("Data processed successfully");
  } else {
    console.log("Data processing failed");
  }
});

export {}
