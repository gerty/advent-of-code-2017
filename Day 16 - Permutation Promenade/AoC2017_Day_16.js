// Advent Of Code Puzzle #16 - Permutation Promenade
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// Happy Holidays! Oil change taking too long. No problem... catching up on Day 16.
console.log('Hello to the world...day 16 is come!');

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

console.log('Answer to Day 11 Part 1 = ' + answer1);
// Now for Part 2
console.log('Answer to Day 11 Part 2 = ' + answer2);
