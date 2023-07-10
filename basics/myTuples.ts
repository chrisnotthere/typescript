// Tuples in TypeScript are like arrays with a fixed number of elements
// Each element has a known and specific type

let tuples: [string, number, boolean];
tuples = ['hello', 10, true]; // Correct initialization
// tuples = [10, 'hello', false]; // Error, wrong types order

// Another example is a tuple representing RGB values
let rgb: [number, number, number] = [255, 0, 0]; // Correct initialization
// rgb = [255, 255]; // Error, missing element
// rgb = [255, 255, 255, 0.5]; // Error, extra element

// Tuple types can be aliased for cleaner code
type Point2D = [number, number];
let point: Point2D = [10, 20];

// Tuples can also have optional elements, denoted by a '?'
type OptionalColor = [number, number?, number?];
let green: OptionalColor = [0, 255];
let blue: OptionalColor = [0, 0, 255];
let alpha: OptionalColor = [0];

// TypeScript also supports rest elements in tuples
type StringBools = [string, ...boolean[]];
let example: StringBools = ["hello", true, false, true];

export {}
