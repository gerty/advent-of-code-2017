// Advent Of Code Puzzle #5 - 
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// 12/4-5/17 - Colder today in Houston. I'm wearing a hoodie. Hope that helps.
console.log('Hello to the world...day 8 is come!');

var fs = require("fs");
var dailyinput = '';		// init daily input string
var data = fs.readFileSync('input.txt');
//var data = fs.readFileSync('test.txt');
dailyinput = data.toString();

var myRegisters = {};
var operatorObjects = {};
var answer1 = 0;
var answer2 = 0;

console.log('Today\'s input has ' + dailyinput.length + ' characters.');

var lines = dailyinput.split('\n'); // splitting the input into lines by newline
console.log('Today\'s input has ' + lines.length + ' lines.');

for (var z=0;z<lines.length;z++) {  // split lines to find each substring
	var splitlines = lines[z].split(' ');
	lines[z] = splitlines;
}

console.log(lines);
// example: obj["key3"] = "value3";

for (var z=0;z<lines.length;z++) {  // split lines to find each substring
	var name1 = lines[z][0];
	var name2 = lines[z][4];
	if (!(name1 in myRegisters)) myRegisters[name1] = 0;
	if (!(name2 in myRegisters)) myRegisters[name2] = 0;
	var proceedString = myRegisters[name2] + ' ' + lines[z][5] + ' ' + lines[z][6];
	console.log('n1=' + name1 + ' n2=' + name2 + ' ' + proceedString + '=' + eval(proceedString));
	if ((lines[z][1] === 'inc') && (eval(proceedString))) {
		myRegisters[name1] += lines[z][2];
	}
	if ((lines[z][1] === 'dec') && (eval(proceedString))) {
		myRegisters[name1] -= lines[z][2];
	}
}

console.log(myRegisters);

console.log('Answer to Day 8 Part 1 = ' + answer1); 

console.log('Answer to Day 8 Part 2 = ' + answer2);