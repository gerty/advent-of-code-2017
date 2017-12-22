// Advent Of Code Puzzle #22 - Disk Defragmentation
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// Happy Holidays! Happy first full day fo winter. It's 70 degF in Houston btw!
console.log('Hello to the world...day 22 is come!');

const gridSize = 1000;
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

while (activity<100) {
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
		//console.log(grid[y]);
	}
	console.log('-X=' + hereX + '--Y=' + hereY + '--Facing=' + facing + '---');
}

// Now for Part 2

// reset the grid
for (var y=0; y<gridSize; y++) {
	grid[y] = [''];
	for (var x=0; x<gridSize; x++) {
		grid[y] = grid[y] + '.';
	}
}

// reload with input
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

// new rules: (weak=~, infected=#, flagged=F, clean=.)
while (activity<10000000) {
	if ((grid[hereY][hereX] === '#')) {  // infected, so turn right
		switch (facing) { 
			case 'U' : {facing = 'R';} break;
			case 'R' : {facing = 'D';} break;
			case 'D' : {facing = 'L';} break;
			case 'L' : {facing = 'U';} break;
			default : {}
		}
		grid[hereY] = grid[hereY].substring(0,hereX) + 'F' + 
					  grid[hereY].substring(hereX+1);		
	}
	else if ((grid[hereY][hereX] === '~')) {  // weak, so no turning
		grid[hereY] = grid[hereY].substring(0,hereX) + '#' + 
					  grid[hereY].substring(hereX+1);		
		answer2++;
	}
	else if ((grid[hereY][hereX] === 'F')) {  // flagged, so reverse
		switch (facing) { 
			case 'U' : {facing = 'D';} break;
			case 'R' : {facing = 'L';} break;
			case 'D' : {facing = 'U';} break;
			case 'L' : {facing = 'R';} break;
			default : {}
		}
		grid[hereY] = grid[hereY].substring(0,hereX) + '.' + 
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
		grid[hereY] = grid[hereY].substring(0,hereX) + '~' + 
					  grid[hereY].substring(hereX+1);
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
		//console.log(grid[y]);
	}
	if (activity%100000===0) 
		console.log('X=' + hereX + ' Y=' + hereY + ' F=' + facing + ' iter=' + activity);
	
}

console.log('Answer to Day 22 Part 1 = ' + answer1); 
console.log('Answer to Day 22 Part 2 = ' + answer2);


