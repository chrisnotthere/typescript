// Enums are a feature added by TypeScript that allow for a friendly way to name sets of numeric or string-based values

// Here we define an enum for seat choices
enum SeatChoice {
  AISLE = 'aisle', // You can initialize enum members with string values
  MIDDLE = 3, // Or with numeric values, and other members will increment from there
  WINDOW, // WINDOW will be 4
  FOURTH // FOURTH will be 5
}

const mySeatChoice: SeatChoice = SeatChoice.AISLE;
console.log(mySeatChoice); // "aisle"

// You can also get the name of an enum member by its value
console.log(SeatChoice[3]); // "MIDDLE"
console.log(SeatChoice[4]); // "WINDOW"

// You can also create numeric enums without initializing them
// The first member will default to 0 and the rest will increment from there
enum Directions {
  NORTH,
  EAST,
  SOUTH,
  WEST
}

console.log(Directions.NORTH); // 0
console.log(Directions.EAST); // 1
console.log(Directions.SOUTH); // 2
console.log(Directions.WEST); // 3

// Enums are useful when dealing with a set of related constants, like days of the week, colors, directions, etc.

export {}
