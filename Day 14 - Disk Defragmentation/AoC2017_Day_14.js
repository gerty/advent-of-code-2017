// Advent Of Code Puzzle #14 - Disk Defragmentation
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// Happy Holidays! Got back from hockey just in the Nick of time!
console.log('Hello to the world...day 14 is come!');

var fs = require("fs");
var crypto = require("crypto");
var data = fs.readFileSync('input.txt');
//var data = fs.readFileSync('test.txt');
var dailyInput = data.toString();
var answer1 = 0;
var answer2 = 0;
const masterLoopSize = 256;

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

	for (var i=0; i<16; i++) {
		xorTally = 0;
		for (var j=0; j<16; j++) {
			xorTally = xorTally ^ sparseHash[i*16+j];
		}
		denseHashString += ('00' + xorTally.toString(16)).slice(-2);

		denseASCIIHash[i] = xorTally;	
//		console.log('xorTally: ' + denseASCIIHash[i]);
	}
	return(denseHashString);
}

for (z=0; z<128; z++) {
	gridInput[z] = dailyInput + '-' + z.toString();
	console.log(gridInput[z]);

	hashInput[z] = giveKnotHash(gridInput[z]);
	// console.log(hashInput[z]);

	var denseHash = denseFromSparse(hashInput[z]);
	console.log(denseHash);

	var bitcount = [];
	for (var i=0; i<denseHash.length; i++) {
		bitcount += ('0000' + parseInt(denseHash[i],16).toString(2)).slice(-4);
	}
	console.log(bitcount);
	
	answer1 += (bitcount.split('1').length-1);
	console.log((bitcount.split('1').length-1) + ' bits found');
	
	console.log('Test input: ' + 
		denseFromSparse(giveKnotHash('230,1,2,221,97,252,168,169,57,99,0,254,181,255,235,167')));
}

//console.log(gridInput);
//console.log(hashInput);

console.log('Answer to Day 14 Part 1 = ' + answer1); // 4094 too low
// Now for Part 2
console.log('Answer to Day 14 Part 2 = ' + answer2);