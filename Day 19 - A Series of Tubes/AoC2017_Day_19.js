// Advent Of Code Puzzle #19 - A Series of Tubes
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// Happy Holidays! Need more sleep.
console.log('Hello to the world...day 19 is come!');

var fs = require("fs");
var data = fs.readFileSync('input.txt');
//var data = fs.readFileSync('test.txt');
var dailyInput = data.toString();
var answer1 = 0;
var answer2 = 0;

// How long is the input? A useful thing to know.
console.log('Today\'s input has ' + dailyInput.length + ' characters.');

var inputParsed = dailyInput.split('\n'); // splitting the input into lines by newline
// then convert to an array of strings
//for (var z=0; z<inputParsed.length; z++) {
//	inputParsed[z] = inputParsed[z].split('\n'); 
//}

var count2 = 0;
for (var i=1; i<inputParsed.length-1; i++) { 
	console.log(inputParsed[i]);
	for (var j=0; j<inputParsed[i].length; j++) {
		if ((inputParsed[i][j] === '-') && 
			(inputParsed[i-1][j] === '|') &&
			(inputParsed[i+1][j] === '|')) {
				count2++;
			}
		if ((inputParsed[i][j] === '|') && 
			(inputParsed[i][j-1] === '-') &&
			(inputParsed[i][j+1] === '-')) {
				count2++;
			}
	}
}

// Approach: Find total non-whitespace characters (14849), 
//           add underpasses by recognition, and add one for when letters got in the way.

console.log(count2);

answer2 = 14849 + count2 + 1;
// raw chars + underpasses + R special case (hides an underpass)

console.log('Answer to Day 19 Part 1 = ' + answer1);
// Now for Part 2
console.log('Answer to Day 19 Part 2 = ' + answer2);