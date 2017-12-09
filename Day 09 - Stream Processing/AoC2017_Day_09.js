// Advent Of Code Puzzle #9 - 
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// 12/9/17 - Happy Holidays! Christmas parties interfered this evening. Breakfast coding?
console.log('\n');
console.log('*** Hello to the world...day 9 is come! ***');
console.log('\n');

var fs = require("fs");
var dailyinput = '';		// init daily input string
var data = fs.readFileSync('input.txt');
//var data = fs.readFileSync('test.txt');
dailyinput = data.toString();

var inputArray = new Array();  // this is the array of input that we will be manipulating
var answerArray = new Array(); // this is the recorded history
var answer1 = 0;
var answer2 = 0;

console.log('Today\'s input has ' + dailyinput.length + ' characters.');

console.log('INPUT = ' + inputArray);
var count = 0;

while (answer1 === 0) {  // while inputArray doesn't match anything in history
		
	console.log(inputArray);
	console.log(answerArray);

} 

console.log('Answer to Day 6 Part 1 = ' + answer1);

console.log('\rAnswer to Day 6 Part 2 = ' + answer2);