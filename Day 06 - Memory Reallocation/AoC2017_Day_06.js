// Advent Of Code Puzzle #6 - 
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// 12/6/17 - Happy Holidays! Learning a lot so far, but down to 3 on the leaderboard.
console.log('Hello to the world...day 6 is come!');

var fs = require("fs");
var crypto = require("crypto");
var dailyinput = '';		// init daily input string
var data = fs.readFileSync('input.txt');
//var data = fs.readFileSync('test.txt');
dailyinput = data.toString();

var numArray = new Array();
var answerArray = new Array();
var count = 0;
var answer1 = 0;
var answer2 = 0;

var inputLength = dailyinput.length; // How long is the input? A useful thing to know.
console.log('Today\'s input has ' + inputLength + ' characters.');

var lines = dailyinput.split('\t'); // splitting the input into strings by tabs
// now we have an array of strings for each line

console.log('Today\'s input has ' + lines.length + ' items.');

for (var z=0;z<lines.length;z++) {    // if each string contains a single integer
	numArray[z] = parseInt(lines[z]); // convert to an array of integers
}

console.log(lines);
console.log(numArray); // work with numArray today


while (answer1 == 0) {
	if (ansChecksum in answerArray) { // if the current array is in the history
		answer1 = count; // the answer would be the count
	}
	answerArray[count++] = ansChecksum; // add to history
	
	console.log(ansChecksum);

// two ideas: one to put each answer in a hash table, then look up to see if anything is there
// 			  another idea is to use a linked list to store the value and pointer to the next
	
	// redistribute
	var maximum = Math.max(...numArray);
	var a = numArray.indexOf(maximum);
	numArray[a] = 0;
	while (maximum > 0) {
		a++;
		if (a > 16) a = 0;
		numArray[a]++;
		maximum--;
	}
	// done redistributing when original maximum=0 and all are increased by 1
	// console.log(numArray);
} // do it again unless you found a match in history

console.log('Answer to Day 6 Part 1 = ' + answer1);

console.log('Answer to Day 6 Part 2 = ' + answer2);