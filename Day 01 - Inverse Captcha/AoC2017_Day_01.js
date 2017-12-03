// Advent Of Code Puzzle #1 - (name of puzzle here)
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// 12/1/17 - Happy Holidays to one and all! I'm in a good mood and ready to start!

console.log('Hello to the world...');

var fs = require("fs");
var dailyinput = '';		// init daily input string
var data = fs.readFileSync('input_day_01.txt'); // CHANGE FILENAME DAILY!!
//var data = fs.readFileSync('test_input_01.txt'); // CHANGE FILENAME DAILY!!
dailyinput = data.toString();

var len = 0;
var answer = 0;

len = dailyinput.length; // How long is the input? A useful thing to know.

console.log('Today\'s input has ' + len + ' characters.');

for (var i = 0; i<len; i++) {  // traverse the string
//	if (dailyinput[i] == dailyinput[   (i+1)    % len]) { // Part 1
	if (dailyinput[i] == dailyinput[(i+(len/2)) % len]) { // Part 2
		answer = answer + parseInt(dailyinput[i]);  // need to add the char as an int
		console.log("Adding " + dailyinput[i]);  // just reporting to the console
	}
}

console.log('Answer to Day 1 Part 1 = ' + answer); // not 1174, 1177