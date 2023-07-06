function addTwo(num: number): number {
  return num + 2;
}
console.log(addTwo(5));

// optional parameter with default value
function logUser(name: string, email: string, isPaid: boolean = false): void {
  console.log(`User '${name}' has logged in with email '${email}' and paid status '${isPaid}'`);
}

logUser('Joe', 'joe@gmail.com');
logUser('Ben', 'ben@gmail.com', true);

function logError(error: string): void {
  console.error(error);
}
logError('Something went wrong');

// throws an error and never returns a value
// the never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program
function fail(msg: string): never {
  throw new Error(msg);
}

// fail('Oops! Something went wrong');


// overloading is a feature that allows a single function to have different signatures.
function getLength(value: string): number;
function getLength(value: any[]): number;
function getLength(value: string | any[]): number {
  return value.length;
}
console.log(getLength('Hello')); // output: 5
console.log(getLength([1, 2, 3, 4, 5])); // output: 5


// rest parameters, allows functions to accept an arbitrary number of arguments
function sumNumbers(...numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumNumbers(1, 2, 3)); // output: 6
console.log(sumNumbers(4, 5, 6, 7)); // output: 22


export {}
