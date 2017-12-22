// Advent Of Code Puzzle #22 - Disk Defragmentation
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// Happy Holidays! Happy first full day fo winter. It's 70 degF in Houston btw!
console.log('Hello to the world...day 22 is come!');

const gridSize = 207;
var fs = require("fs");
var data = fs.readFileSync('input.txt');
//var data = fs.readFileSync('test.txt');
var dailyInput = data.toString();
var answer1 = 0;
var answer2 = 0;
var grid = [gridSize];  // make a grid that allows movement by gridSize in any direction
for (var y=0; y<gridSize; y++) {
	grid[y] = [''];
	for (var x=0; x<gridSize; x++) {
		grid[y] = grid[y] + '.';
	}
}

var inputParsed = dailyInput.split('\n'); // splitting the input into lines by newline
console.log(inputParsed);

var dx = Math.floor(gridSize/2) - Math.floor(inputParsed.length/2); // find top-left
var dy = Math.floor(gridSize/2) - Math.floor(inputParsed.length/2);
console.log('dx = ' + dx + ' dy = ' + dy);

for (var y=0; y<inputParsed.length; y++) {
	for (var x=0; x<inputParsed[y].length; x++) {
		grid[dy+y] = grid[dy+y].substring(0,dx+x) + inputParsed[y][x] + 
					 grid[dy+y].substring(dx+x+1);
	}
}

var hereX = Math.floor(gridSize/2);
var hereY = Math.floor(gridSize/2);
var facing = 'U';
var activity = 0;

while (activity<10000) {
	if ((grid[hereY][hereX] === '#')) {  // infected, so turn right
		switch (facing) { 
			case 'U' : {facing = 'R';} break;
			case 'R' : {facing = 'D';} break;
			case 'D' : {facing = 'L';} break;
			case 'L' : {facing = 'U';} break;
			default : {}
		}
		grid[hereY] = grid[hereY].substring(0,hereX) + ',' + 
					  grid[hereY].substring(hereX+1);		
	}
	else {  // clean, so turn left
		switch (facing) { 
			case 'U' : {facing = 'L';} break;
			case 'R' : {facing = 'U';} break;
			case 'D' : {facing = 'R';} break;
			case 'L' : {facing = 'D';} break;
			default : {}
		}
		grid[hereY] = grid[hereY].substring(0,hereX) + '#' + 
					  grid[hereY].substring(hereX+1);
		answer1++;
	}
	
	switch (facing) {  // now move forward one step
		case 'U' : {hereY--} break;
		case 'R' : {hereX++} break;
		case 'D' : {hereY++} break;
		case 'L' : {hereX--} break;
		default : {}
	}
	activity++;

	for (var y=0; y<grid.length; y++) {
		console.log(grid[y]);
	}
	console.log('-X=' + hereX + '--Y=' + hereY + '--Facing=' + facing + '---');
}

console.log('Answer to Day 22 Part 1 = ' + answer1); 
// Now for Part 2
console.log('Answer to Day 22 Part 2 = ' + answer2);


