// Advent Of Code Puzzle #22 - Disk Defragmentation
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// Happy Holidays! Happy first full day fo winter. It's 70 degF in Houston btw!
console.log('Hello to the world...day 22 is come!');

const gridSize = 20;
var fs = require("fs");
//var data = fs.readFileSync('input.txt');
var data = fs.readFileSync('test.txt');
var dailyInput = data.toString();
var answer1 = 0;
var answer2 = 0;
var grid = [gridSize];  // make a grid that allows movement by gridSize in any direction
for (var i=0; i<gridSize; i++) {
	grid[i] = [''];
	for (var j=0; j<gridSize; j++) {
		grid[i] = grid[i] + '.';
	}
}

// How long is the input? A useful thing to know.
console.log('Today\'s input has ' + dailyInput.length + ' characters.');

var inputParsed = dailyInput.split('\n'); // splitting the input into lines by newline

var dx = Math.floor(gridSize/2) - Math.floor(inputParsed.length/2);
var dy = Math.floor(gridSize/2) - Math.floor(inputParsed.length/2);
console.log('dx = ' + dx);
console.log('dy = ' + dy);

for (var i=0; i<inputParsed.length; i++) {
	for (var j=0; j<inputParsed[i].length; j++) {
		grid[dx+i] = grid[dx+i].substring(0,dy+j) + inputParsed[i][j] + 
					 grid[dx+i].substring(dy+ j + 1);
	}
}

var hereX = Math.floor(gridSize/2);
var hereY = Math.floor(gridSize/2);
var facing = 'U';
var activity = 0;

while (activity<70) {
	if ((grid[hereX][hereY] === '.')) {  // clean, so turn left
		switch (facing) { 
			case 'U' : {facing = 'L';} break;
			case 'R' : {facing = 'U';} break;
			case 'D' : {facing = 'R';} break;
			case 'L' : {facing = 'D';} break;
			default : {}
		}
		grid[hereX] = grid[hereX].substring(0,hereY) + '#' + 
					  grid[hereX].substring(hereY + 1);		
		answer1++;
	}
	else {  // infected, so turn right
		switch (facing) { 
			case 'U' : {facing = 'R';} break;
			case 'R' : {facing = 'D';} break;
			case 'D' : {facing = 'L';} break;
			case 'L' : {facing = 'U';} break;
			default : {}
		}
		grid[hereX] = grid[hereX].substring(0,hereY) + '.' + 
					  grid[hereX].substring(hereY + 1);
	}
	
	switch (facing) {  // now move forward one step
		case 'U' : {hereY--} break;
		case 'R' : {hereX++} break;
		case 'D' : {hereY++} break;
		case 'L' : {hereX--} break;
		default : {}
	}
	activity++;

	for (var i=0; i<grid.length; i++) {
		console.log(grid[i]);
	}
}

console.log('Answer to Day 22 Part 1 = ' + answer1); 
// Now for Part 2
console.log('Answer to Day 22 Part 2 = ' + answer2);


