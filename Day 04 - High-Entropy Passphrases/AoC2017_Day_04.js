// Advent Of Code Puzzle #4 - High-Entropy Passphrases
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// 12/3/17 - Happy Holidays! Bike ride today. I either solve quick or sleep!

console.log('Hello to the world...day 4 is come!');

var fs = require("fs");
var dailyinput = '';		// init daily input string
var data = fs.readFileSync('input.txt');
//var data = fs.readFileSync('test_input.txt');
dailyinput = data.toString();

var len = 0;
var inputArray = new Array(); // usually an array is involved. Leave length arbitrary.
var answer1 = 0;
var answer2 = 0;

len = dailyinput.length; // How long is the input? A useful thing to know.
console.log('Today\'s input has ' + len + ' characters.');

var lines = dailyinput.split('\n'); // splitting the input into lines by newline
for (var i=0;i<lines.length;i++) {
	inputArray[i] = lines[i].split(' '); // splitting the lines into items by spaces
}
console.log('Today\'s input has ' + lines.length + ' lines.');

// Lets find the number of bad passphrases
for (var i=0;i<lines.length;i++) {
	for (var j=0;j<lines[i].length;j++) { // now we go line by line through array
		for (var k=0;k<j;k++) { // only go back and check behind you in array
			if (lines[i][j] === lines[i][k]) {
				answer1++;
				j = lines[i].length; // zoom to end of array so you don't count twice
			}
		}
	}
}

answer1 = lines.length - answer1; // counted the invalid - subtract out the valid
console.log('Answer to Day 4 Part 1 = ' + answer1); // not 22521

console.log('Answer to Day 4 Part 2 = ' + answer2);