// Advent Of Code Puzzle #6 - Memory Reallocation
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// Happy Holidays! Learning a lot so far, but this one is taking a while.
console.log('*** Hello to the world...day 6 is come! ***');

var fs = require("fs");
var crypto = require('crypto');
var dailyinput = '';		// init daily input string
//var data = fs.readFileSync('input.txt');
//var data = fs.readFileSync('test.txt');
var data = fs.readFileSync('input2.txt');
dailyinput = data.toString();

var answer1 = 0;
var answer2 = 0;

var items = dailyinput.split('\t'); // splitting the input into strings by tabs
console.log('Today\'s input has ' + items.length + ' items.');

var inputArray = new Array();  // this is the array of input that we will be manipulating
for (var i=0;i<items.length;i++) {      // each string contains a single integer
	inputArray[i] = parseInt(items[i],10); // force to read as an integer
}
console.log('INPUT = ' + inputArray);

function toHexChars(myItems) {
	myChars = '';
	for (var i=0; i<myItems.length; i++) {
		myChars += myItems[i].toString(16);
	}
	return(myChars);
}

var inputHashes = new Set(); // this is the recorded history, once converted to strings
var thisHash = crypto.createHash('md5').update(toHexChars(inputArray)).digest('hex');

while (inputHashes.has(thisHash) === false) {  // input not in history
	inputHashes.add(thisHash); // add to history

	// redistribute
	var maximum = Math.max(...inputArray); // find the max
	var a = inputArray.indexOf(maximum); // go to the max's index
	inputArray[a] = 0; // zero out the max
	while (maximum > 0) { // drain it out until 0
		a++; if (a > items.length-1) a = 0;  // got to the next location with wraparound
		inputArray[a]++; // increment where we land
		maximum--; // one more down
	}
	thisHash = crypto.createHash('md5').update(toHexChars(inputArray)).digest('hex');
} // do it again unless you found a match in history
console.log(inputArray);
answer2 = inputHashes.size;

console.log('Answer to Day 6 Part 2 = ' + answer2);