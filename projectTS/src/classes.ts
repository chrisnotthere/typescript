// Classes in TypeScript are similar to those in JavaScript with some additional features
class User {
  public email: string; // Can be accessed from anywhere
  name: string; // If no visibility modifier is specified, it's public by default
  private city: string = 'Delhi'; // Can only be accessed within the class

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const janet = new User('1@1.com', 'janet');
console.log(janet);
// janet.city = 'New York'; // Error: 'city' is private

// Another way of writing the above class using shorthand initialization
class newUser {
  private city: string = 'Bangalore';

  constructor(
    public email: string, // Declare and initialize in the same place
    public name: string
  ) {}
}

const john = new newUser('2@2.com', 'john');
console.log(john);

// More complex class with getter, setter, readonly and protected properties
class complexUser {
  protected _courseCount = 1; // Can be accessed within the class and subclasses

  readonly city: string = 'Bangalore'; // Can't be changed after initialization

  constructor(
    public email: string,
    public name: string
  ) {}

  private deleteToken() {
    console.log('Deleting token');
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(coursenum: number) {
    if (coursenum <= 1){
      throw new Error('Course count should be greater than 1');
    }
    this._courseCount = coursenum;
  }
}

const karen = new complexUser('karen@mail.com', 'karen');
console.log(karen.getAppleEmail);
console.log(karen.courseCount)
karen.courseCount = 2;
console.log(karen.courseCount);

// Class inheritance using 'extends'
class subComplexUser extends complexUser {
  isFamily: boolean = true;

  changeCourseCount() {
    this._courseCount = 10;
  }

  // Method overriding
  get getAppleEmail(): string {
    return `sub${super.getAppleEmail}`;
  }
}

const mike = new subComplexUser('mike@mail.com', 'mike');
console.log(mike.getAppleEmail); // 'subapplemike@mail.com'

// Abstract classes and methods
abstract class AbstractUser {
  abstract getUniqueID(): string;
}

class ConcreteUser extends AbstractUser {
  getUniqueID(): string {
    return 'unique-id';
  }
}

const concreteUser = new ConcreteUser();
console.log(concreteUser.getUniqueID()); // 'unique-id'


