// Objects in TypeScript can be annotated with specific types
// These types can be inline, type aliases, interfaces, or built-in types

// Inline object type annotation
function createCourse(): { name: string; price: number } {
  return {
    name: "TypeScript",
    price: 100,
  };
}

const course = createCourse(); // Type inference
console.log(course);

//////////////////////////////

// Type alias for an object
type User = {
  readonly _id: string; // readonly prevents reassignment
  name: string;
  email: string;
  isActive: boolean;
  phoneNumber?: string; // Optional property
};

function createUser(user: User): void {
  console.log(
    `User '${user.name}' has logged in with email '${user.email}', active status '${user.isActive}', and phone number '${user.phoneNumber || "N/A"}'`
  );
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

let myUser: User = {
  _id: "742",
  name: "Billy",
  email: "billy@b.com",
  isActive: true,
};

myUser.name = "Billy Bob";
// myUser._id = '111'; // cannot change _id because it is readonly
console.log(myUser._id);
console.log(myUser?.phoneNumber); // Optional chaining

//////////////////////////////

// Intersection types allow combining multiple types
type cardNumber = {
  cardNumber: string;
}

type cardDate = {
  cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
  cvv: number
}

const card: cardDetails = {
  cardNumber: '1234 5678 9012 3456',
  cardDate: '12/23',
  cvv: 123
}

// Index signature allows creating objects with any number of properties of a certain type
type Dictionary = {
  [key: string]: string;
}

let colors: Dictionary = {
  red: "#f00",
  green: "#0f0",
  blue: "#00f",
};

console.log(colors.red); // "#f00"

export {};
