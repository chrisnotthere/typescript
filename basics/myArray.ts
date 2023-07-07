// Array of strings
const superHeroes: string[] = [];
superHeroes.push("Spiderman");
superHeroes.push("Iron Man");
superHeroes.push("Batman");

// Array of strings using Array<T> syntax
const heroPowers: Array<string> = [];
heroPowers.push("Spider Web");
heroPowers.push("Flight");
heroPowers.push("Utility Belt");

// Type definition for Hero object
type Hero = {
  name: string;
  power: string;
};

// Array of Hero objects
const allHeroes: Hero[] = [];
allHeroes.push({
  name: "Spiderman",
  power: "Spider Web",
});
allHeroes.push({
  name: "Iron Man",
  power: "Flight",
});
allHeroes.push({
  name: "Batman",
  power: "Utility Belt",
});

console.log(allHeroes);

// Array of arrays
const data: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(data);
