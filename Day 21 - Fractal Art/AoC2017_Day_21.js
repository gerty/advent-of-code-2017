// Advent Of Code Puzzle #21 - Fractal Art
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// Happy Holidays! Board games before 11pm, and Game of Life after?
console.log('Hello to the world...day 21 is come!');

var fs = require("fs");
var data = fs.readFileSync('input.txt');
//var data = fs.readFileSync('test.txt');
var dailyInput = data.toString();

const maxIterations = 5;
var answer1 = 0;
var answer2 = 0;
ruleInput = [];  // a list of strings defining inputs to enhancement
ruleOutput = [];  // a list of strings defining outputs of enhancement
myBigSquare = [];

//////////////////////////////////////////////////
function rotateCW(inSquare, times) { // rotate a square 'times' number of times
	var localArray = [];
	var borderLen = 0;
	if (inSquare.length>=9) borderLen=3;
	else borderLen = 2;
	console.log('Rotating square of border length: ' + borderLen);
	switch times {
		case 1 : { // rotating CW 1 turn
			for (var i=0; i<borderLen; i++) { 
				for (var j=0; j<borderLen; j++) {
					inSquare....????
				}
			}
		}

	}

}

function flipSquare(inSquare) {  // take an array and flip it over the X axis
	var localArray = [];
	var borderLen = Math.sqrt(inSquare.length);
	//console.log('Flipping square of border length: ' + borderLen);
	for (var i=0; i<borderLen; i++) {
		//cycle through and flip the thing
	}
}

function processSquare(inSquare) {
	// take a string and return the square based on my input
	// rules data are in ruleInput and ruleOutput (global arrays)
	
}

function insertSquare(littleSquare, bigSquare, x, y) {
	// takes a little array and puts it in to a big array at x,y
}

//////////////////////////////////////////////////
// How long is the input? A useful thing to know.
console.log('Today\'s input has ' + dailyInput.length + ' characters.');

// dailyInput has one rule per line
var inputParsed = dailyInput.split('\n'); // splitting the input into lines by newline

// each line is formatted 'input => output' with a space between each of 3 sections
for (var z=0; z<inputParsed.length; z++) {
	inputParsed[z] = inputParsed[z].split(' ');
	ruleInput[z] = inputParsed[z][0].split('/').join(''); // take out the '/' from string
	ruleOutput[z] = inputParsed[z][2].split('/').join('');	
}           // now we have our input mapping rules

// Turning this into a map, for all 8 rotations and flips:
var ruleMap = new Map();
for (var m=0; m<ruleInput.length; m++) {
	for (rot=0; rot<4; rot++) {  // rotate it 4 times and enter into solution map
		ruleMap.set(rotateCW(ruleInput[m],rot),ruleOutput[m]); // non-flipped
		ruleMap.set(flipSquare(rotateCW(ruleInput[m],rot)),ruleOutput[m]);  // flipped
		console.log(rotateCW(ruleInput[m])); // this should show all 8 iterations of ruleInput
	}
}

var iteration = 1;
while (iteration <= maxIterations) {  // look at const maxIterations to know when to stop
	var newSquare = [];  // this is where the resultant square will go
	if (myBigSquare.length % 2 === 0) {  // is it a multiple of 2
		for (i=0; i<myBigSquare.length/2;i+=2) {
			for (j=0; j<myBigSquare.length/2; j+=2) {
				
			}
		}
	}
	else {  // it must be a multiple of 3
		for (i=0; i<myBigSquare.length/2;i+=2) {
			for (j=0; j<myBigSquare.length/2; j+=2) {
				
			}
		}
	}
//	return myBigSquare = newSquare;
	iteration++;
	console.log(`${flipSquare(myBigSquare)} - ${flipSquare(myBigSquare)}\r`);
}

answer1 = 0;

console.log('Answer to Day 21 Part 1 = ' + answer1);
// Now for Part 2
console.log('Answer to Day 21 Part 2 = ' + answer2);