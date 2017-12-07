// Advent Of Code Puzzle #6 - 
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// 12/6/17 - Happy Holidays! Learning a lot so far, but down to 3 on the leaderboard.
console.log('\n');
console.log('*** Hello to the world...day 6 is come! ***');
console.log('\n');

var fs = require("fs");
//var crypto = require("crypto");
var dailyinput = '';		// init daily input string
//var data = fs.readFileSync('input.txt');
var data = fs.readFileSync('test.txt');
dailyinput = data.toString();

var inputArray = new Array();  // this is the array of input that we will be manipulating
var answerArray = new Array(); // this is the recorded history
var answer1 = 0;
var answer2 = 0;

var items = dailyinput.split('\t'); // splitting the input into strings by tabs

console.log('Today\'s input has ' + items.length + ' items.');

for (var z=0;z<items.length;z++) {       // each string contains a single integer
	inputArray[z] = parseInt(items[z],16); // convert to an array of hex
}

console.log('INPUT = ' + inputArray);
var count = 0;

while (answer1 === 0) {  // while inputArray doesn't match anything in history
	answerArray[count] = new Array();
	answerArray[count] = inputArray; // add to history
	count++;

	for (var a=1; a<answerArray.length; a++) { // compare new inputArray with history
		if (inputArray === answerArray[a]) { // if the current array is in the history
			console.log('Found that ' + answerArray[a] + ' is in the history.');
			answer1 = count; // the answer would be the length of history
		}
	}

	// redistribute
	console.log('History looks like this now: ' + answerArray);
	var maximum = Math.max(...inputArray); // find the max
	console.log('MAX: ' + maximum);
	var a = inputArray.indexOf(maximum); // go to the max's index
	console.log('at location: ' + a);
	inputArray[a] = 0; // zero out the max
	while (maximum > 0) { // drain it out until 0
		a++; if (a > items.length-1) a = 0;  // got to the next location with wraparound
		inputArray[a]++; // increment where we land
		maximum--; // one more down
	}
	
	console.log(inputArray);
	console.log(answerArray);
	
// ideas: one to put each answer in a hash table, then look up to see if anything is there
// 		  another idea is to use a linked list to store the value and pointer to the next
//		  third idea to store state in strings of hex

	// done redistributing when original maximum=0 and all are increased by 1
	console.log(inputArray + ' for iteration ' + answerArray.length);
	console.log(answer1);
} // do it again unless you found a match in history

console.log('Answer to Day 6 Part 1 = ' + answer1);

console.log('\rAnswer to Day 6 Part 2 = ' + answer2);