// Advent Of Code Puzzle #14 - Disk Defragmentation
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// Happy Holidays! Got back from hockey just in the Nick of time!
console.log('Hello to the world...day 14 is come!');

var fs = require("fs");
var crypto = require("crypto");
//var data = fs.readFileSync('input.txt');
var data = fs.readFileSync('test.txt');
var dailyInput = data.toString();
var answer1 = 0;
var answer2 = 0;
const masterLoopSize = 128;

// How long is the input? A useful thing to know.
console.log('Today\'s input has ' + dailyInput.length + ' characters.');

var gridInput = [];
var hashInput = [];

console.log(dailyInput);

function getArraySection(array,len,curPos) {
	var output = []; // we return the subsection of the array we're targeting
	for (var i=0; i<len; i++) {
		output[i] = array[(curPos+i) % array.length];
	}
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
	return(output);
}

function giveKnotHash(myInputString) {
	var loopASCIILengths = []
	var knotASCIICircle = new Array();
	for (var i=0; i<masterLoopSize; i++) { knotASCIICircle[i] = i; } // load array
	currentPosition = 0;
	skipSize = 0;

	for (var i=0; i<myInputString.length; i++) {
		loopASCIILengths[i] = myInputString.charCodeAt(i);
	}

	for (var iteration=0; iteration<64; iteration++) {
		for (var i=0; i<loopASCIILengths.length; i++) { // walk through input lengths
			var sectionToReplace = getArraySection(knotASCIICircle,
											   	   loopASCIILengths[i],
											   	   currentPosition);
			sectionToReplace = sectionToReplace.reverse();
			knotASCIICircle = putArraySection(knotASCIICircle,
											  sectionToReplace,
											  currentPosition);
			currentPosition = (currentPosition + 
							   loopASCIILengths[i] + 
							   skipSize) 
							   % masterLoopSize;
			skipSize++;
		}
	}
	return(knotASCIICircle);
}

function denseFromSparse(sparseHash) {
	var denseASCIIHash = [];
	var denseHashString = '';

	for (var i=0; i<8; i++) {
		xorTally = 0;
		for (var j=0; j<8; j++) {
			xorTally = xorTally ^ sparseHash[i*16+j];
		}
		if (xorTally<16) denseHashString += '0';
		denseHashString += xorTally.toString(16);

		denseASCIIHash[i] = xorTally;	
//		console.log('xorTally: ' + denseASCIIHash[i]);
	}
	return(denseHashString);
}

function Hex2Bin(n){return parseInt(n,16).toString(2)}

for (z=0; z<128; z++) {
	gridInput[z] = dailyInput + '-' + z.toString();
	hashInput[z] = giveKnotHash(gridInput[z]);
	console.log('Dense Hash: ' + denseFromSparse(hashInput[z]));
	var bitcount = [];
	//bitcount = parseInt(denseFromSparse(hashInput[z])).toString(2).split(""); // fix this
	bitcount = Hex2Bin(denseFromSparse(hashInput[z]));
	console.log(bitcount);
	//answer1 += bitcount.sort().join("").toString().length; // fix all this...
	answer1 += bitcount.split('1').length;
}

//console.log(gridInput);
//console.log(hashInput);

console.log('Answer to Day 14 Part 1 = ' + answer1);
// Now for Part 2
console.log('Answer to Day 14 Part 2 = ' + answer2);