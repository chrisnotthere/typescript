const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

// Generic function that accepts a value of any type and returns a value of the same type
function identityThree<Type>(val: Type): Type {
  return val;
}

// Same as identityThree, but with a different type variable name (T instead of Type)
function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({ brand: "Coke", type: 1 });

// Function that accepts an array of any type and returns the first element
function getSearchProducts<T>(products: T[]): T {
  return products[0];
}

// Same as above but with arrow syntax
const getMoreSearchProducts = <T>(products: T[]): T => {
  return products[0];
};

///////////////////////////////////////////////

interface Database {
  connection: string;
  username: string;
  password: string;
}

// Function that accepts a value of any type and a value that extends the Database interface
function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunction(3, {
  connection: "test",
  username: "test",
  password: "test",
});

///////////////////////////////////////////////

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

// Generic class that accepts a type variable T
class Sellable<T> {
  public cart: T[] = []

  addToCart(product: T) {
    this.cart.push(product);
  }
}

// Use the generic class with a specific type (Quiz)
const test = new Sellable<Quiz>();
test.addToCart({name: 'test', type: 'test'});
console.log(test.cart); // [{name: 'test', type: 'test'}]

// Use the generic class with another specific type (Course)
const courseSale = new Sellable<Course>();
courseSale.addToCart({name: 'Mathematics', author: 'John Doe', subject: 'Math'});
console.log(courseSale.cart); // [{name: 'Mathematics', author: 'John Doe', subject: 'Math'}]
