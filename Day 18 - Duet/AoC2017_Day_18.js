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
			myData[allInput[i][1]] = getVal(allInput[i][2]);
			i++;
			break;
		case 'add' :
			if (myData[allInput[i][1]] === undefined) myData[allInput[i][1]] = 0;
			myData[allInput[i][1]] += getVal(allInput[i][2]);
			i++;
			break;
		case 'mul' :
			if (myData[allInput[i][1]] === undefined) myData[allInput[i][1]] = 0;
			myData[allInput[i][1]] *= getVal(allInput[i][2]);
			i++;
			break;
		case 'mod' :
			if (myData[allInput[i][1]] === undefined) myData[allInput[i][1]] = 0;
			myData[allInput[i][1]] %= getVal(allInput[i][2]);
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

var myDataA = {};
var myDataB = {};

i = 0;
j = 0;

var aSide = dailyInput.split('\n'); // splitting the input into lines by newline
// then convert to an array
for (var z=0; z<aSide.length; z++) {
	aSide[z] = aSide[z].split(' '); 
}

var bSide = dailyInput.split('\n'); // splitting the input into lines by newline
// then convert to an array
for (var z=0; z<bSide.length; z++) {
	bSide[z] = bSide[z].split(' '); 
}

var deadlockA = 0;
var deadlockB = 0;
var a2b = [];
var b2a = [];

while ((i<aSide.length)&&(i>=0)&&((deadlockA<4)||(deadlockB<4))&&(j<bSide.length)&&(j>=0)) { 
	switch(aSide[i][0]) {
		case 'snd' :
			a2b.push(getVal(aSide[i][1]));
			answer2++;
			console.log('A: ' + myDataA + ' B: ' + myDataB);
			i++;
			deadlockB = 0;
			break;
		case 'set' :
			if (myDataA[aSide[i][1]]) myDataA[aSide[i][1]] = getVal(aSide[i][2]);
			else { myDataA[aSide[i][1]] = getVal(aSide[i][2]); }
			i++;
			break;
		case 'add' :
			if (myDataA[aSide[i][1]] === undefined) myDataA[aSide[i][1]] = 0;
			myDataA[aSide[i][1]] += getVal(aSide[i][2]);
			i++;
			break;
		case 'mul' :
			if (myDataA[aSide[i][1]] === undefined) myDataA[aSide[i][1]] = 0;
			myDataA[aSide[i][1]] *= getVal(aSide[i][2]);
			i++;
			break;
		case 'mod' :
			if (myDataA[aSide[i][1]] === undefined) myDataA[aSide[i][1]] = 0;
			myDataA[aSide[i][1]] %= getVal(aSide[i][2]);
			i++;
			break;
		case 'rcv' :
			if (b2a.length>0) myDataA[aSide[i++][1]] = b2a.unshift();
			else deadlockA++;
			break;
		case 'jgz' : 
			if (myDataA[aSide[i][1]] <= 0) i++;
			else i = i + getVal(aSide[i][2]);
			break;
		default :
			i++;
			break;
	}
	switch(bSide[j][0]) {
		case 'snd' :
			b2a.push(getVal(bSide[j][1]));
			j++;
			deadlockA = 0;
			break;
		case 'set' :
			if (myDataB[bSide[j][1]]) myDataB[bSide[j][1]] = getVal(bSide[j][2]);
			else { myDataB[bSide[j][1]] = getVal(bSide[j][2]); }
			j++;
			break;
		case 'add' :
			if (myDataB[bSide[j][1]] === undefined) myDataB[bSide[j][1]] = 0;
			myDataB[bSide[j][1]] += getVal(bSide[j][2]);
			j++;
			break;
		case 'mul' :
			if (myDataB[bSide[j][1]] === undefined) myDataB[bSide[j][1]] = 0;
			myDataB[bSide[j][1]] *= getVal(bSide[j][2]);
			j++;
			break;
		case 'mod' :
			if (myDataB[bSide[j][1]] === undefined) myDataB[bSide[j][1]] = 0;
			myDataB[bSide[j][1]] %= getVal(bSide[j][2]);
			j++;
			break;
		case 'rcv' :
			if (a2b.length>0) myDataB[bSide[j++][1]] = a2b.unshift();
			else deadlockB++;
			break;
		case 'jgz' : 
			if (myDataB[bSide[j][1]] <= 0) j++;
			else j = j + getVal(bSide[j][2]);
			break;
		default :
			j++;
			break;
	}
	console.log('i=' + i + ' j=' + j + ' a2b=' + a2b + ' b2a=' + b2a);
}


console.log('Answer to Day 18 Part 2 = ' + answer2);