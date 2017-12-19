// Advent Of Code Puzzle #11 - Hex Ed
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// Happy Holidays! Oil change taking too long. No problem... catching up on Day 11.
console.log('Hello to the world...day 11 is come!');

var fs = require("fs");
var data = fs.readFileSync('input.txt');
//var data = fs.readFileSync('test.txt');
var dailyInput = data.toString();
var answer1 = 0;
var answer2 = 0;

// How long is the input? A useful thing to know.
console.log('Today\'s input has ' + dailyInput.length + ' characters.');

var inputs = dailyInput.split(','); // splitting the input directions by spaces

var nCoord = 0;
var eCoord = 0;

// Calculating distance with process shown here: 
// http://3dmdesign.com/development/hexmap-coordinates-the-easy-way

for (var z=0;z<inputs.length;z++) { 
	if (inputs[z] === 'n') nCoord++;
	if (inputs[z] === 'ne') { nCoord++; eCoord++; }
	if (inputs[z] === 'se') eCoord += 1;
	if (inputs[z] === 's') nCoord--;
	if (inputs[z] === 'sw') { nCoord--; eCoord--; }
	if (inputs[z] === 'nw') eCoord -= 1;

	dx = Math.abs(eCoord);
	dy = Math.abs(nCoord);
	dd = Math.abs(nCoord - eCoord);

	if ((dx>dy) && (dx>dd)) answer1 = Math.abs(dx);
	if ((dy>dx) && (dy>dd)) answer1 = Math.abs(dy);
	if ((dd>dy) && (dd>dx)) answer1 = Math.abs(dd);

	if (answer1 > answer2) answer2 = answer1;
}

console.log('Answer to Day 11 Part 1 = ' + answer1); // 2567, 2881 too high
// Now for Part 2
console.log('Answer to Day 11 Part 2 = ' + answer2);
