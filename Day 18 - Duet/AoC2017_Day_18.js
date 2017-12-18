// Advent Of Code Puzzle #18 - Duet
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// Happy Holidays! Gearing up to be competitive at least for one star tonight!
console.log('Hello to the world...day 18 is come!');

var fs = require("fs");
var data = fs.readFileSync('input.txt');
//var data = fs.readFileSync('test.txt');
var dailyInput = data.toString();
var answer1 = 0;
var answer2 = 0;

// How long is the input? A useful thing to know.
console.log('Today\'s input has ' + dailyInput.length + ' characters.');

var allInput = dailyInput.split('\n'); // splitting the input into lines by newline
// then convert to an array of integers
for (var z=0; z<allInput.length; z++) {
	allInput[z] = allInput[z].split(' '); 
}

var frequency = 0;
var myData = {};

console.log(allInput);
var i = 0;

function getVal(str) { // find the variable value, or converts string to actual number
	if (isNaN(parseInt(str))) {
		return(myData[str]);
	}
	else {
		return parseInt(str);
	}
}

while ((i<allInput.length) && (i>=0)) { 
	console.log(myData);
	console.log('Current position in instructions: ' + i);
	switch(allInput[i][0]) {
		case 'snd' :
			console.log('Playing sound with frequency: ' + getVal(allInput[i][1]));
			soundLastPlayed = getVal(allInput[i][1]);
			i++;
			break;
		case 'set' :
			if (myData[allInput[i][1]] != undefined) {
				myData[allInput[i][1]] = getVal(allInput[i][2]);
				console.log('Adjusting old ' + allInput[i][1] + ' to ' + getVal(allInput[i][2]));
			}
			else {
				myData[allInput[i][1]] = getVal(allInput[i][2]);
				console.log('Setting new ' + allInput[i][1] + ' to ' + getVal(allInput[i][2]));
			}
			i++;
			break;
		case 'add' :
			if (myData[allInput[i][1]] === undefined) myData[allInput[i][1]] = 0;
			myData[allInput[i][1]] += getVal(allInput[i][2]);
			console.log('Adding ' + getVal(allInput[i][2] + ' to ' + allInput[i][1]));
			i++;
			break;
		case 'mul' :
			if (myData[allInput[i][1]] === undefined) myData[allInput[i][1]] = 0;
			myData[allInput[i][1]] *= getVal(allInput[i][2]);
			console.log('Multiplying ' + getVal(allInput[i][2] + ' by ' + allInput[i][1]));
			i++;
			break;
		case 'mod' :
			if (myData[allInput[i][1]] === undefined) myData[allInput[i][1]] = 0;
			myData[allInput[i][1]] %= getVal(allInput[i][2]);
			console.log(allInput[i][1] + ' modulo ' + getVal(allInput[i][2]));
			i++;
			break;
		case 'rcv' :
			if (getVal(allInput[i][1]) != 0) {
				myData[allInput[i][1]] = soundLastPlayed; // "recovering"?
				console.log('Just recovered sound to ' + soundLastPlayed);
				answer1 = soundLastPlayed;
				i=-1;
			}
			i++;
			break;
		case 'jgz' : 
			if (myData[allInput[i][1]] === 0) {
				i++;
			}
			else {
				console.log('Jump ahead ' + getVal(allInput[i][1]));
				i = i + getVal(allInput[i][2]);
			}
			break;
		default :
			i++;
			break;
	}
}

console.log('Answer to Day 18 Part 1 = ' + answer1);
// Now for Part 2
console.log('Answer to Day 18 Part 2 = ' + answer2);