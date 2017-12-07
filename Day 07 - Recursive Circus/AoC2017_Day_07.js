// Advent Of Code Puzzle #7 - 
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// 12/4-5/17 - Happy Holidays! Got back from hockey in the Nick of time (see what I did there?)
console.log('Hello to the world...day 7 is come!');

var fs = require("fs");
var dailyinput = '';		// init daily input string

var data = fs.readFileSync('input.txt');
const inputBase = 'ahnofa';

//var data = fs.readFileSync('test.txt');
//const inputBase = 'tknk';

dailyinput = data.toString();

var answer2 = 0;

var lines = dailyinput.split('\n'); // splitting the input into lines by newline
console.log('Today\'s input has ' + lines.length + ' lines.');

for (var z=0;z<lines.length;z++) {  // split lines to find each substring
	var splitlines = lines[z].split(' ');
	lines[z] = splitlines;
}

var onlythenames = new Array(); // put only the words in this array

for (var i=0; i<lines.length; i++) {
	for (var j=0; j<lines[i].length; j++) { // while within the bounds
		if (!((lines[i][j].includes('-') || lines[i][j].includes('(')))) {
			onlythenames.push(lines[i][j]);
		}
	}
}
onlythenamessorted = onlythenames.sort();
// console.log(onlythenamessorted); // used this to find 'ahnofa' was only single occurrence
// completely lucked out that it was close to the beginning!
console.log('Answer to Day 7 Part 1 = ahnofa'); 

function isBalanced(anArray) {
	for (var a=1; a<anArray.length; a++) {
		if (anArray[a] != anArray[0]) return(false);
	}
	return(true);
}

console.log(lines);

function howMuchDoYouWeigh(inputLines, base) {
	//console.log('Called base: ' + base);
	var myWeight = 0;
	for (var i=0; i<inputLines.length; i++) {
		if (inputLines[i][0] === base) { // this is the base we're looking for
			//console.log('FOUND base: ' + base);
			if (inputLines[i].length > 2) { // it also has weights above it
				var thisTower = [];
				for (var j=3; j<inputLines[i].length; j++) {
					thisTower[j-3] = howMuchDoYouWeigh(inputLines,inputLines[i][j].replace(/,\s*$/, ""));
					myWeight += thisTower[j-3];
					//console.log(inputLines[i][j].replace(/,\s*$/, "") + ' from ' + base + ' ... myWeight for base ' + base + ' is ' + myWeight);
				}
				if (!isBalanced(thisTower)) {
					console.log('this tower: ' + 
							 	thisTower + '=' +
							 	myWeight +
							 	' plus base: ' + 
							  	base + 
							 	'=' + 
							 	parseInt(inputLines[i][1].slice(1,-1)));
				}
				return(myWeight + parseInt(inputLines[i][1].slice(1,-1)));
			}
			else { // this is the top of a tower
				//console.log('Tower ' + base + ' is ' + parseInt(inputLines[i][1].slice(1,-1)));
				return(parseInt(inputLines[i][1].slice(1,-1))); // return the integer
			}
		}
	}
}

answer2 = howMuchDoYouWeigh(lines, inputBase);
console.log('Answer to Day 7 Part 2 = ' + answer2);

// Pencil and paper process not really here - will code it in later.