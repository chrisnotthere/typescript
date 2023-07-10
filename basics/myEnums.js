"use strict";
// Enums are a feature added by TypeScript that allow for a friendly way to name sets of numeric or string-based values
Object.defineProperty(exports, "__esModule", { value: true });
// Here we define an enum for seat choices
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice[SeatChoice["MIDDLE"] = 3] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 4] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 5] = "FOURTH"; // FOURTH will be 5
})(SeatChoice || (SeatChoice = {}));
var mySeatChoice = SeatChoice.AISLE;
console.log(mySeatChoice); // "aisle"
// You can also get the name of an enum member by its value
console.log(SeatChoice[3]); // "MIDDLE"
console.log(SeatChoice[4]); // "WINDOW"
// You can also create numeric enums without initializing them
// The first member will default to 0 and the rest will increment from there
var Directions;
(function (Directions) {
    Directions[Directions["NORTH"] = 0] = "NORTH";
    Directions[Directions["EAST"] = 1] = "EAST";
    Directions[Directions["SOUTH"] = 2] = "SOUTH";
    Directions[Directions["WEST"] = 3] = "WEST";
})(Directions || (Directions = {}));
console.log(Directions.NORTH); // 0
console.log(Directions.EAST); // 1
console.log(Directions.SOUTH); // 2
console.log(Directions.WEST); // 3
