// Advent Of Code Puzzle #3 - (name of puzzle here)
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// 12/3/17 - Happy Holidays! Bike ride today. I either solve quick or sleep!

console.log('Hello to the world...day 3 is come!');

var fs = require("fs");
var dailyinput = '';		// init daily input string
var data = fs.readFileSync('input_day_03.txt'); // CHANGE FILENAME DAILY!!
//var data = fs.readFileSync('test_input_03.txt'); // CHANGE FILENAME DAILY!!
dailyinput = data.toString();

var len = 0;
var input = new Array(); // usually an array is involved. Leave length arbitrary for now.
var answer1 = 0;
var answer2 = 0;

for (var z=0; z<16; z++) {  // for 2-dimensional array of 16
	sheet[z] = new Array(); 
}

len = dailyinput.length; // How long is the input? A useful thing to know.
console.log(dailyinput);
console.log('Today\'s input has ' + len + ' characters.');

var lines = dailyinput.split('\n'); // splitting the input into lines by newline
for (var i=0;i<lines.length;i++) {
	sheet[i] = lines[i].split('\t'); // splitting the lines into items by tabs
}

console.log(sheet);

for (var i=0;i<16;i++) {
	for (var j=0;j<16;j++) { // now we go line by line through a 16x16 array
		// do something important
	}
}

for (var sum=0;sum<16;sum++){
	answer1 += divisibleCollection[sum];
}

console.log('Answer to Day 3 Part 1 = ' + answer1);

console.log('Answer to Day 3 Part 2 = ' + answer2);