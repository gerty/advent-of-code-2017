// Advent Of Code Puzzle #13 - Packet Scanners
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// Happy Holidays! Hopefully on a roll!
console.log('Hello to the world...day 13 is come!');

var fs = require("fs");
var data = fs.readFileSync('input.txt');
//var data = fs.readFileSync('test.txt');
var dailyInput = data.toString();
var answer1 = 0;
var answer2 = 0;

// How long is the input? A useful thing to know.
console.log('Today\'s input has ' + dailyInput.length + ' characters.');

var inputInts = dailyInput.split('\n'); // splitting the input into lines by newline
// then convert to an array of integers
for (var z=0; z<inputInts.length; z++) {
	inputInts[z] = inputInts[z].split(':'); 
}

var firewall = [];
for (var i=0; i<inputInts.length; i++) { // create firewall, populate rows in input
	firewall[parseInt(inputInts[i][0])] = parseInt(inputInts[i][1]);  // layer depth
}

function calcPenalty(wall,delay) {
	var picosec = delay;
	var pen = 0;
	var loc = 0;
	var cleared = false;
	
	while (loc < wall.length) {
		if ((picosec % (2 * (wall[loc]-1))) != 0) {
			cleared = true;
		}
		if (wall[loc] === undefined) cleared = true;	

		if (!cleared) {
			pen += (loc) * (wall[loc]);
			console.log('penalty = ' + pen + ' (at loc='+loc+',time='+picosec+')');
		}
		loc++;
		picosec++;
		cleared = false;	
	}
	return(pen);
}

function isPenalty(wall,delay) {
	var picosec = delay;
	var pen = 0;
	var loc = 0;
	var cleared = false;
	
	while (loc < wall.length) {
		if ((picosec % (2 * (wall[loc]-1))) != 0) {
			cleared = true;
		}
		if (wall[loc] === undefined) cleared = true;	

		if (!cleared) {
			console.log('this won\'t work = ' + pen);
			return(false);
		}
		loc++;
		picosec++;
		cleared = false;	
	}
	return(true);
}

answer1 = calcPenalty(firewall,0);

var found = false;
var thisTry = 0;
while (!found) {
	if (isPenalty(firewall,thisTry)) {
		answer2 = thisTry;
		found=true;
	}
	thisTry++;
}

console.log('Answer to Day 13 Part 1 = ' + answer1);
// Now for Part 2
console.log('Answer to Day 13 Part 2 = ' + answer2);