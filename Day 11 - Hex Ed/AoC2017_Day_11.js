// Advent Of Code Puzzle #11 - 
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// Happy Holidays! Placeholder time... hoping to catch up this weekend
console.log('Hello to the world...day 11 is come!');

var fs = require("fs");
var data = fs.readFileSync('input.txt');
//var data = fs.readFileSync('test.txt');
var dailyInput = data.toString();
var answer1 = 0;
var answer2 = 0;

// How long is the input? A useful thing to know.
console.log('Today\'s input has ' + dailyInput.length + ' characters.');

var inputInts = dailyInput.split(','); // splitting the input into lines by comma
// then convert to an array of integers
for (var z=0;z<inputInts.length;z++) { inputInts[z] = parseInt(inputInts[z]); }

console.log('Answer to Day 10 Part 1 = ' + answer1);
// Now for Part 2
console.log('Answer to Day 10 Part 2 = ' + answer2);