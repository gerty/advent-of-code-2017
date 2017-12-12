// Advent Of Code Puzzle #12 - Digital Plumber
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// Happy Holidays! Hoping for quick points and an early bedtime. . . HAHAHAHAAHAHAAHA!
console.log('Hello to the world...day 12 is come!');

var fs = require("fs");
var data = fs.readFileSync('input.txt');
//var data = fs.readFileSync('test.txt');
var dailyInput = data.toString();
var parsedInput = [];
var answer1 = 0;
var answer2 = 0;
var allthezerotalkers = new Set();

// How long is the input? A useful thing to know.
console.log('Today\'s input has ' + dailyInput.length + ' characters.');

var eachLine = [];
var rawInput = dailyInput.split('\n'); // splitting the input into lines by newline
for (var z=0;z<rawInput.length;z++) { 
	eachLine[z] = rawInput[z].split('<->');
	eachLine[z] = eachLine[z][1].trim().split(',');
	parsedInput[z] = [];
	parsedInput[z][0] = parseInt(eachLine[0]); 
}

function loadZeroSet(target) {
	for (var i=0; i<eachLine[target].length; i++) {
		console.log(eachLine[target][i]);
		if (!allthezerotalkers.has(parseInt(eachLine[target][i]))) {
			allthezerotalkers.add(parseInt(eachLine[target][i]));
			loadZeroSet(parseInt(eachLine[target][i]));
		}
	}
}

console.log(eachLine);

loadZeroSet(0);

answer1 = allthezerotalkers.size;

console.log('Answer to Day 12 Part 1 = ' + answer1); // Got it!

// Now for Part 2


console.log('Answer to Day 12 Part 2 = ' + answer2);