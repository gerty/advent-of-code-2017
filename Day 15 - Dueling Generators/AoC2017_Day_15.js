// Advent Of Code Puzzle #15 - Dueling Generators
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// Happy Holidays! Distracted by Day 14 still.
console.log('Hello to the world...day 15 is come!');

// initial seeds
var seedGenA = 512;
var seedGenB = 191;
var exampleSeedGenA = 65;
var exampleSeedGenB = 8921;

// generator rules
const factorGenA = 16807;
const factorGenB = 48271;
const judgeDivide = 2147483647;
var answer1 = 0;
var answer2 = 0;

for (var z=0;z<4000000;z++) {
	exampleSeedGenA *= 16807;
	exampleSeedGenB *= 48271;
	exampleSeedGenA %= 2147483647;
	exampleSeedGenB %= 2147483647;
	if ((exampleSeedGenA | 65535) === (exampleSeedGenB | 65535)) {
		answer1++;
		console.log('Match at iteration: ' + z);
	}
}

console.log('Answer to Day 11 Part 1 = ' + answer1);
// Now for Part 2
console.log('Answer to Day 11 Part 2 = ' + answer2);
