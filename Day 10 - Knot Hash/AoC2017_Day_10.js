// Advent Of Code Puzzle #10 - 
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// Happy Holidays! This is a breakfast session. Did I remember to water the tree?
console.log('Hello to the world...day 10 is come!');

var fs = require("fs");
var data = fs.readFileSync('input.txt');
//var data = fs.readFileSync('test.txt');
const masterLoopSize = 256;
var dailyInput = data.toString();
var answer1 = 0;
var answer2 = 0;

var knotCircle = new Array();
for (var i=0; i<masterLoopSize; i++) { knotCircle[i] = i; } // load array

// How long is the input? A useful thing to know.
console.log('Today\'s input has ' + dailyInput.length + ' characters.');

var loopLengths = dailyInput.split(','); // splitting the input into lines by comma
// then convert to an array of integers
for (var z=0;z<loopLengths.length;z++) { loopLengths[z] = parseInt(loopLengths[z]); }
console.log('...and ' + loopLengths.length + ' integers to work with.')
console.log(loopLengths);

function getArraySection(array,len,curPos) {
	var output = []; // we return the subsection of the array we're targeting
	for (var i=0; i<len; i++) {
		output[i] = array[(curPos+i) % array.length];
	}
//	console.log('Found: ' + output);
//	console.log('   in: ' + array);	
	return(output);
}

function putArraySection(array,subSection,curPos) {
	var output = []; // in this case returned array is entire array, reconstructed
	for (var i=0; i<array.length; i++) {
		output[i] = array[i];
	}
	for (var i=0; i<subSection.length; i++) { // place subsection on original content
		output[(curPos + i) % array.length] = subSection[i];
	}
//	console.log('Before : ' + array);
//	console.log('After  : ' + output);
	return(output);
}

var currentPosition = 0;   // true index of where the loops start
var skipSize = 0;

for (var i=0; i<loopLengths.length; i++) { // walk through input lengths
	var sectionToReplace = getArraySection(knotCircle,loopLengths[i],currentPosition);
	sectionToReplace = sectionToReplace.reverse();
	knotCircle = putArraySection(knotCircle,sectionToReplace,currentPosition);
	currentPosition = (currentPosition + loopLengths[i] + skipSize) % masterLoopSize;
	skipSize++;
	console.log('Current Position: ' + currentPosition + ' Skip size: ' + skipSize);
}

// console.log(knotCircle);
answer1 = knotCircle[0] * knotCircle[1]; // 52212 too high, 2928 is right!

console.log('Answer to Day 10 Part 1 = ' + answer1);

// Now for Part 2: Infinitely more intimidating.

var loopASCIILengths = []
var knotASCIICircle = new Array();
for (var i=0; i<masterLoopSize; i++) { knotASCIICircle[i] = i; } // load array
currentPosition = 0;
skipSize = 0;

for (var i=0; i<dailyInput.length; i++) {
	loopASCIILengths[i] = dailyInput.charCodeAt(i);
}
loopASCIILengths = loopASCIILengths.concat(17,31,73,47,23); // interesting add...

for (var iteration=0; iteration<64; iteration++) {
	for (var i=0; i<loopASCIILengths.length; i++) { // walk through input lengths
		var sectionToReplace = getArraySection(knotASCIICircle,
											   loopASCIILengths[i],
											   currentPosition);
		sectionToReplace = sectionToReplace.reverse();
		knotASCIICircle = putArraySection(knotASCIICircle,
										  sectionToReplace,
										  currentPosition);
		currentPosition = (currentPosition + loopASCIILengths[i] + skipSize) % masterLoopSize;
		skipSize++;
	}
}

console.log('Sparse Hash: ' + knotASCIICircle);
var denseASCIIHash = [];
var denseHashString = '';

for (var i=0; i<16; i++) {
	xorTally = 0;
	for (var j=0; j<16; j++) {
		xorTally = xorTally ^ knotASCIICircle[i*16+j];
	}
	if (xorTally<16) denseHashString += '0';
	denseHashString += xorTally.toString(16);

	denseASCIIHash[i] = xorTally;	
}

console.log('Dense Hash: ' + denseASCIIHash + '(' + denseHashString + ')');

console.log('Answer to Day 10 Part 2 = ' + answer2); //not c2f794b2eb555f7830766bf8fb65a16