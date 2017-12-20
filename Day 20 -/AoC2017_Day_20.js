// Advent Of Code Puzzle #20 - 
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// Happy Holidays! Might give it a go before utter collapse.
console.log('Hello to the world...day 20 is come!');

var fs = require("fs");
//var data = fs.readFileSync('input.txt');
var data = fs.readFileSync('test.txt');
var dailyInput = data.toString();
var answer1 = 0;
var answer2 = 0;

// How long is the input? A useful thing to know.
console.log('Today\'s input has ' + dailyInput.length + ' characters.');

var inputParsed = dailyInput.split('\n'); // splitting the input into lines by newline
// then convert to an array of integers
for (var z=0; z<inputParsed.length; z++) {
	inputParsed[z] = inputParsed[z].split(' '); 
}
console.log(inputParsed);
for (var i=0; i<inputParsed.length; i++) { // create firewall, populate rows in input
// do something with the data?
}

answer1 = 0;

console.log('Answer to Day 20 Part 1 = ' + answer1);
// Now for Part 2
console.log('Answer to Day 20 Part 2 = ' + answer2);