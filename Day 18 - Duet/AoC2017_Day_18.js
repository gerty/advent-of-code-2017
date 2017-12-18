// Advent Of Code Puzzle #18 - Duet
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// Happy Holidays! Gearing up to be competitive at least for one star tonight!
console.log('Hello to the world...day 18 is come!');

var fs = require("fs");
//var data = fs.readFileSync('input.txt');
var data = fs.readFileSync('test.txt');
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
var dataNames = [];
var dataVals = [];

console.log(allInput);
var i = 0;

function getVal(str) { // find the variable value, or converts string to actual number
	if (parseInt(str) === NaN) return(dataVals[dataNames.indexOf(str)]);
	else return parseInt(str);
}

while (i<allInput.length) { 
	//console.log('testing 123: ' + getVal('123'));
	//console.log('testing a: ' + getVal('a'));
	//console.log('testing 0: ' + getVal('0'));

	console.log('Current position in file: ' + i);
	switch(allInput[i][0]) {
		case 'snd' :
			console.log('Playing sound with frequency: ' + getVal(allInput[i][1]));
			soundLastPlayed = getVal(allInput[i][2]);
			i++;
			break;
		case 'set' :
			var here = dataNames.indexOf(allInput[i][1]);
			if (here === -1) {
				dataNames.push(allInput[i][1]);
				dataVals.push(getVal(allInput[i][2]));
				console.log('Setting ' + allInput[i][1] + ' to ' + getVal(allInput[i][2]));
			}
			else {
				dataVals[here] = getVal(allInput[i][2]);
				console.log('Updating ' + allInput[i][1] + ' to ' + getVal(allInput[i][2]));
			}
			i++;
			break;
		case 'add' :
			var here = dataNames.indexOf(allInput[i][1]);
			dataVals[here] += getVal(allInput[i][2]);
			console.log('Adding ' + getVal(allInput[i][2] + ' to ' + allInput[i][2]);
			i++;
			break;
		case 'mul' :
			var here = dataNames[getVal(allInput[i][1])];
			dataVals[here] *= getVal(allInput[i][2]);
			console.log('Multiplying ' + allInput[i][2] + ' by ' + allInput[i][2]);
			i++;
			break;
		case 'mod' :
			var here = dataNames[getVal(allInput[i][1])];
			dataVals[here] %= getVal(allInput[i][2]);
			i++;
			break;
		case 'rcv' :
			var here = dataNames[getVal(allInput[i][1])];
			if (dataVals[here] != 0) {
				dataVals[here] = soundLastPlayed; // is this considered "recovering"?
				console.log('Just recovered non-zero value of ' + soundLastPlayed);
			}
			i++;
			break;
		case 'jgz' : 
			var here = dataNames[getVal(allInput[i][1])];
			console.log('Jump to ' + here);
			if (dataVals[here] != 0) {
				if (typeof allInput[i][2] === 'number') {
					i = i + allInput[i][2];
				}
				else {
					i = i + dataVals[dataNames.indexOf(allInput[i][2])];
				}
			}
			i++;
			break;
		default :
			i++;
			break;
		console.log('We are in ' + i + ' position in our input.');
	}
}


answer1 = 0;

console.log('Answer to Day 18 Part 1 = ' + answer1);
// Now for Part 2
console.log('Answer to Day 18 Part 2 = ' + answer2);