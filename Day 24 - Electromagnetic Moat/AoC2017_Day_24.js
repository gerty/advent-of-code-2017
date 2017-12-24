// Advent Of Code Puzzle #24 - Electromagnetic Moat
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// Happy Holidays! Amazed I made it this far!
console.log('Hello to the world...day 24 is come!');

var fs = require("fs");
var data = fs.readFileSync('input.txt');
//var data = fs.readFileSync('test.txt');
var dailyInput = data.toString();
var answer1 = 0;
var answer2 = 0;

// How long is the input? A useful thing to know.
console.log('Today\'s input has ' + dailyInput.length + ' characters.');

var allInput = dailyInput.split('\n'); // splitting the input into lines by newline
for (var z=0; z<allInput.length; z++) {
	allInput[z] = allInput[z].split('/'); // then split by '/'
}

var myPorts = [];

console.log(allInput);
var i = 0;

// This function will check the array in its current order for the best linkage
function getBridgeScore(ports) { // find the variable value, or converts string to actual number
	var score = parseInt(ports[0][0]); // start at the first point in the chain
	var bestScore = 0;
//	console.log('Calculating score - start');
	for (var i=0; i<ports.length-1; i++) { // cycle through until the second to last
		score += parseInt(ports[i][1]); // add to the score the second half automatically
		if (parseInt(ports[i+1][0]) != parseInt(ports[i][1])) { // only reset if ===
			if (score > bestScore) bestScore = score; // register best score
			score = 0;  // reset score
		}
		score += parseInt(ports[i+1][0]); // always preload the next beginning
	}
	score += parseInt(ports[ports.length-1][1]);
	console.log('Calculating score: ' + score + ' BEST: ' + bestScore);
	if (score > bestScore) return score;
	else return bestScore;
}

answer1 = getBridgeScore(allInput);
iterations = 10000;
var answerAge = 0;
var moveThis = [];
while (iterations > 0) {  // while we haven't burned through all of our iterations
	for (i=0;i<allInput.length-1;i++) {  // traverse the array
//		console.log('Looking for mismatch');
		if (parseInt(allInput[i][1]) != parseInt(allInput[i+1][0])) {  // look for mismatch
			console.log('Popping out into moveThis var');
			moveThis = allInput[i+1];
			allInput.splice(i+1,1);  // pop out into moveThis variable
			allInput.splice(allInput.length,0,moveThis); // put it at the end for now
//			console.log('Looking for an appropriate place to insert...');			
//			for (var j=0; j<allInput.length; j++) {  // look for an appropriate place
//				console.log('Check if end of moveThis === beginning of an entry');
//				if ((moveThis[1] === allInput[j][0]) || (j === allInput.length)) {
//					allInput.splice(j,0,moveThis);  
						// put it before the beginning match, or at end if no match
//				}
//			}
		}
	}
	var currentScore = getBridgeScore(allInput);
	if (answer1 < currentScore) {
		console.log('New high score: ' + currentScore);
		answer1 = currentScore;
	}
	else answerAge++;
	if (answerAge === 100) {
		moveThis = allInput[allInput.length-1];
		console.log('**********' + allInput.splice(allInput.length-1,1));  // pop out the beginning and put it on the end
		allInput.splice(0,0,moveThis)
	}
	iterations--;
	console.log('Iterations left: ' + iterations);
}

console.log(allInput);

console.log('Answer to Day 18 Part 1 = ' + answer1); // not 438, 401 too low
// Now for Part 2
console.log('Answer to Day 18 Part 2 = ' + answer2);