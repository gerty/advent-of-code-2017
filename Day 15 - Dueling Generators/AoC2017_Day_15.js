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
	seedGenA = exampleSeedGenA;
	seedGenB = exampleSeedGenB;
var compareA = [];
var compareB = [];

for (var z=0;z<5000;z++) {
	seedGenA *= 16807;
	seedGenB *= 48271;
	seedGenA %= 2147483647;
	seedGenB %= 2147483647;
	
	if (seedGenA % 4 === 0) compareA.push(seedGenA);  // Only push multiples of 4
	if (seedGenB % 8 === 0) compareB.push(seedGenB);  // Only push multiples of 8
	
	if ((compareA.length > 0) && (compareB.length > 0)) {
		if ((compareA[0] % 65536) === (compareB[0] % 65536)) {
			console.log(compareA[0]);
			console.log(compareB[0]);	
			compareA.unshift();
			compareB.unshift();
			answer2++;
			console.log('Example has match #' + answer2 + ' at iteration: ' + z);
		}
	}
}

console.log('Answer to Day 15 Part 1 = ' + answer1);
// Now for Part 2
console.log('Answer to Day 15 Part 2 = ' + answer2);
