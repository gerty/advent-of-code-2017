// Advent Of Code Puzzle #21 - Fractal Art
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// Happy Holidays! Board games before 11pm, and Game of Life after?
console.log('Hello to the world...day 21 is come!');

var fs = require("fs");
var data = fs.readFileSync('input.txt');
//var data = fs.readFileSync('test.txt');
var dailyInput = data.toString();
var answer1 = 0;
var answer2 = 0;

// How long is the input? A useful thing to know.
console.log('Today\'s input has ' + dailyInput.length + ' characters.');

var inputParsed = dailyInput.split('\n'); // splitting the input into lines by newline

for (var z=0; z<inputParsed.length; z++) {
	inputParsed[z] = inputParsed[z].split(' '); 
}
console.log(inputParsed);

answer1 = 0;

console.log('Answer to Day 21 Part 1 = ' + answer1);
// Now for Part 2
console.log('Answer to Day 21 Part 2 = ' + answer2);