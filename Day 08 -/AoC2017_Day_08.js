// Advent Of Code Puzzle #5 - 
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// 12/4-5/17 - Happy Holidays! Work is taking its toll. Quick shot before bed for points.
console.log('Hello to the world...day 5 is come!');

var fs = require("fs");
var dailyinput = '';		// init daily input string
var data = fs.readFileSync('input.txt');
//var data = fs.readFileSync('test.txt');
dailyinput = data.toString();

var numArray = new Array();
var answer1 = 0;
var answer2 = 0;

console.log('Today\'s input has ' + dailyinput.length + ' characters.');

var lines = dailyinput.split('\n'); // splitting the input into lines by newline
console.log('Today\'s input has ' + lines.length + ' lines.');

for (var z=0;z<lines.length;z++) {  // convert to an array of integers
	numArray[z] = parseInt(lines[z]);
}

// console.log(numArray);

console.log('Answer to Day 8 Part 1 = ' + answer1); 

console.log('Answer to Day 8 Part 2 = ' + answer2);