// Advent Of Code Puzzle #7 - 
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// 12/4-5/17 - Happy Holidays! Got back from hockey in the Nick of time (see what I did there?)
console.log('Hello to the world...day 7 is come!');

var fs = require("fs");
var dailyinput = '';		// init daily input string
var data = fs.readFileSync('input.txt');
//var data = fs.readFileSync('test.txt');
dailyinput = data.toString();

var len = 0;
var count = 0;
var numArray = new Array();
var answer1 = 0;
var answer2 = 0;

len = dailyinput.length; // How long is the input? A useful thing to know.
console.log('Today\'s input has ' + len + ' characters.');

var lines = dailyinput.split('\n'); // splitting the input into lines by newline

for (var z=0;z<lines.length;z++) {  // convert to an array of integers
	numArray[z] = parseInt(lines[z]);
}

// console.log(numArray);

var i = 0;   // true index
var whereAmI = 0;  // record where you came from each time
var steps = 0;   // count all the steps (really jumps)

while ((i>=0) && (i<numArray.length)) { // while within the bounds
	whereAmI = i;  // record starting off point
	// console.log(numArray[whereAmI] + ' is at index ' + whereAmI);
	i += numArray[i];  // go to new spot 
	if (numArray[whereAmI] >= 3) {
		numArray[whereAmI]--; // increase the spot where you were by 1
	}
	else {
		numArray[whereAmI]++; // increase the spot where you were by 1
	}
	if ((i>=0) && (i<numArray.length)) {
		answer2++;
	}
} 
//console.log(numArray);

console.log('Today\'s input has ' + lines.length + ' lines.');

console.log('Answer to Day 7 Part 1 = ' + answer1); 

console.log('Answer to Day 7 Part 2 = ' + answer2);