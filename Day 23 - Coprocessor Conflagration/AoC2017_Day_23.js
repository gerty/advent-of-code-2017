// Advent Of Code Puzzle #23 - Coprocessor Conflagration
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// Happy Holidays! Related to day 18 - only did half of that one.. ugh!
console.log('Hello to the world...day 23 is come!');

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
	allInput[z] = allInput[z].split(' '); 
}

var frequency = 0;
var myData = {'a':1,'b':0,'c':0,'d':0,'e':0,'f':0,'g':0,'h':0};

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
	//console.log('Current position in instructions: ' + i);
	//if (myData['e'] > 0) myData['e'] += 108400;
	switch(allInput[i][0]) {
/*		case 'snd' :
			console.log('Playing sound with frequency: ' + getVal(allInput[i][1]));
			soundLastPlayed = getVal(allInput[i][1]);
			i++;
			break;*/
		case 'set' :
			if (myData[allInput[i][1]] != undefined) {
				myData[allInput[i][1]] = getVal(allInput[i][2]);
				//console.log('Adjusting old ' + allInput[i][1] + ' to ' + getVal(allInput[i][2]));
			}
			else {
				myData[allInput[i][1]] = getVal(allInput[i][2]);
				//console.log('Setting new ' + allInput[i][1] + ' to ' + getVal(allInput[i][2]));
			}
			i++;
			break;
/*		case 'add' :
			if (myData[allInput[i][1]] === undefined) myData[allInput[i][1]] = 0;
			myData[allInput[i][1]] += getVal(allInput[i][2]);
			console.log('Adding ' + getVal(allInput[i][2] + ' to ' + allInput[i][1]));
			i++;
			break;*/
		case 'sub' :
			if (myData[allInput[i][1]] === undefined) myData[allInput[i][1]] = 0;
			myData[allInput[i][1]] -= getVal(allInput[i][2]);
			//console.log('Subtracting ' + getVal(allInput[i][1]) + ' by ' + allInput[i][2]);
			i++;
			break;
		case 'mul' :
			//console.log('*****Mul invoked****');
			if (myData[allInput[i][1]] === undefined) myData[allInput[i][1]] = 0;
			myData[allInput[i][1]] *= getVal(allInput[i][2]);
			//console.log('Multiplying ' + getVal(allInput[i][2]) + ' by ' + allInput[i][1]);
			i++;
			answer1++;
			break;
/*		case 'mod' :
			if (myData[allInput[i][1]] === undefined) myData[allInput[i][1]] = 0;
			myData[allInput[i][1]] %= getVal(allInput[i][2]);
			console.log(allInput[i][1] + ' modulo ' + getVal(allInput[i][2]));
			i++;
			break;
		case 'rcv' :
			if (getVal(allInput[i][1]) != 0) {
				myData[allInput[i][1]] = soundLastPlayed; // "recovering"?
				console.log('Just recovered sound to ' + soundLastPlayed);
				//answer1 = soundLastPlayed;
				i=-1;
			}
			i++;
			break;*/
		case 'jnz' : 
			if (getVal(myData[allInput[i][1]]) === 0) {
				i++;
				//console.log('Here because ' + getVal(myData[allInput[i][1]]));
			}
			else {
				//console.log('Jump ahead ' + getVal(allInput[i][1]));
				i = i + getVal(allInput[i][2]);
			}
			break;
		default :
			i++;
			break;
	}
	if (myData['h'] > 0) console.log(myData);
}

console.log('Answer to Day 23 Part 1 = ' + answer1);
// Now for Part 2
console.log('Answer to Day 23 Part 2 = ' + answer2);

