// Advent Of Code Puzzle #1 - (name of puzzle here)
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// 12/1/17 - Happy Holidays to one and all! I'm in a good mood and ready to start!

console.log('Hello to the world...');
const daily_input = 'DAY1INPUTHERE'; // CHANGE DAILY!!

var fs = require("fs");
var dailyinput = '';
var data = fs.readFileSync('input_day_01.txt'); // CHANGE FILENAME DAILY!!
dailyinput = data.toString();

var min = 0;
var len = 0;
var max = 0;
var i = 0;

len = dailyinput.length;

console.log('Today\'s input has ' + len + ' characters.');

for (var i = 0; i<len; i++) {
	console.log(dailyinput[i]);
}

console.log('Answer to Day 1 = ' + 'N0T YET');