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
//	seedGenA = exampleSeedGenA;
//	seedGenB = exampleSeedGenB;

for (var z=0;z<40000000;z++) {
	seedGenA *= 16807;
	seedGenB *= 48271;
	seedGenA %= 2147483647;
	seedGenB %= 2147483647;
//	console.log(seedGenA + '\t' + seedGenB);
	if (((seedGenA >>> 0) % 65536) === ((seedGenB >>> 0) % 65536)) {
		answer1++;
		console.log('Example has match #' + answer1 + ' at iteration: ' + z);
	}
}

console.log('Answer to Day 11 Part 1 = ' + answer1);
// Now for Part 2
console.log('Answer to Day 11 Part 2 = ' + answer2);
