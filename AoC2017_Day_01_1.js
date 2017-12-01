// Advent Of Code Puzzle #1 - (name of puzzle here)
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// 12/1/17 - Happy Holidays to one and all! I'm in a good mood and ready to start!

console.log('Hello to the world...');

var fs = require("fs");
var dailyinput = '';
var data = fs.readFileSync('input_day_01.txt'); // CHANGE FILENAME DAILY!!
//var data = fs.readFileSync('test_input_01.txt'); // CHANGE FILENAME DAILY!!
dailyinput = data.toString();

var min = 0;
var len = 0;
var max = 0;
var i = 0;

len = dailyinput.length;

console.log('Today\'s input has ' + len + ' characters.');
var answer = 0;

for (var i = 0; i<len; i++) {
	if (dailyinput[i] == dailyinput[(i+(len/2)) % len]) { // Part 1 "(len/2)" was "1"
		answer = answer + parseInt(dailyinput[i]);
		console.log("Adding " + dailyinput[i]);
	}
}

console.log('Answer to Day 1 Part 1 = ' + answer); // not 1174, 1177