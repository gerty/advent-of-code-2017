// Advent Of Code Puzzle #6 - 
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// 12/6/17 - Happy Holidays! Learning a lot so far, but down to 3 on the leaderboard.
console.log('Hello to the world...day 6 is come!');

var fs = require("fs");
var dailyinput = '';		// init daily input string
var data = fs.readFileSync('input.txt');
//var data = fs.readFileSync('test.txt');
dailyinput = data.toString();

var inputLength = 0;
var count = 0;
var numArray = new Array();
var textArray = new Array();
var intArray = new Array();
var answer1 = 0;
var answer2 = 0;

inputLength = dailyinput.length; // How long is the input? A useful thing to know.
console.log('Today\'s input has ' + inputLength + ' characters.');

var lines = dailyinput.split('\n'); // splitting the input into lines by newline
// now we have an array of strings for each line

for (var z=0;z<lines.length;z++) {    // if each line contains a single integer
	numArray[z] = parseInt(lines[z]); // convert to an array of integers
}

for (var z=0;z<lines.length;z++) {      // if each line contains multiple entries
	wordArray[z] = lines[z].split(' '); // split elements on each line by spaces
}

for (var z=0;z<lines.length;z++) {
	for (y=0;y<lines[z].length;y++) {
		intArray[y][z] = parseInt(lines[z]); // on each line convert to ints, put in array
	}
}

//console.log(lines);
//console.log(numArray);
//console.log(wordArray);
//console.log(intArray);

console.log('Today\'s input has ' + lines.length + ' lines.');

console.log('Answer to Day 6 Part 1 = ' + answer1);

console.log('Answer to Day 6 Part 2 = ' + answer2);