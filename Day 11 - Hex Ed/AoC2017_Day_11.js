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

var inputs = dailyInput.split(' '); // splitting the input directions by spaces

var nCoord = 0;
var eCoord = 0;

for (var z=0;z<inputs.length;z++) { 
	if (inupts[z] === 'n') nCoord++;
	if (inupts[z] === 'ne') { nCoord++; eCoord++; }
	if (inupts[z] === 'se') eCoord += 1;
	if (inupts[z] === 's') nCoord--;
	if (inupts[z] === 'sw') { nCoord--; eCoord--; }
	if (inupts[z] === 'nw') eCoord i= 1;
}

// Calculate distance with process shown here: 
// http://3dmdesign.com/development/hexmap-coordinates-the-easy-way

dx = eCoord;
dy = nCoord;
dd = eCoord - nCoord;

if ((dx>dy) && (dx>dd)) answer1 = Math.abs(dx);
if ((dy>dx) && (dy>dd)) answer1 = Math.abs(dy);
if ((dd>dy) && (dd>dx)) answer1 = Math.abs(dd);

console.log('Answer to Day 11 Part 1 = ' + answer1);
// Now for Part 2
console.log('Answer to Day 11 Part 2 = ' + answer2);
