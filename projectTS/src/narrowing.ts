function detectType(val: number | string) {
  // The type of val is narrowed from number | string to string within this block
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

// Type narrowing using truthiness check
function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  id.toLowerCase();
}

function printAll(strings: string | string[] | null) {
  // dont do this!
  // empty string is falsy, so this will print nothing when strings is an empty string
  if (strings) {
    if (typeof strings === "object") {
      for (const s of strings) {
        console.log(s);
      }
    } else if (typeof strings === "string") {
      console.log(strings);
    }
  }
}

//////////////////////////////////

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

// use 'in' operator to check if a property exists in an object
function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

//////////////////////////////////

// instanceof narrowing

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

logValue("hello world"); // HELLO WORLD
logValue(new Date()); // Tue, 11 Jul 2023 14:25:00 PST

// type predicates

type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Duck = Bird & Fish;

// pet is fish if it has swim method
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet; // pet is Fish
    return "fish food";
  } else {
    pet; // pet is Bird
    return "bird Food";
  }
}

//////////////////////////////////

// discriminated unions

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square | Rectangle;

// Discriminated unions for exhaustive checks
function getArea(shape: Shape) {
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
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

//  The default section above is a kind of safety measure to ensure that all possibilities
//  for the shape type are exhaustively handled.

//  If you add a new shape type to the Shape union, you’ll get a compiler error in the default
//  section of the switch statement until you add a case for the new type.

// Add a new shape to the Shape union
interface Triangle {
  kind: "triangle";
  base: number;
  height: number;
}

type newShape = Circle | Square | Rectangle | Triangle;

// If you now run getNewArea function without handling Triangle, you'll get a compile error
// So you need to handle the new case
function getNewArea(shape: newShape) {
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
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

