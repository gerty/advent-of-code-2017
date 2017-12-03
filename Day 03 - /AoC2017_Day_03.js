// Advent Of Code Puzzle #3 - (name of puzzle here)
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// 12/3/17 - Happy Holidays! Bike ride today. I either solve quick or sleep!

console.log('Hello to the world...day 3 is come!');

//var fs = require("fs");
//var dailyinput = '';		// init daily input string
//var data = fs.readFileSync('input_day_03.txt'); // CHANGE FILENAME DAILY!!
//var data = fs.readFileSync('test_input_03.txt'); // CHANGE FILENAME DAILY!!
//dailyinput = data.toString();

const puzzleInput = 368078;
const arrayWidth = 20;
console.log('Puzzle Input is: ' + puzzleInput + ' and width of array is: ' + arrayWidth);
var inputArray = new Array(arrayWidth); // usually array is involved. length arbitrary.

for (var i=0; i<arrayWidth; i++) {  // for 2-dimensional array of arrayWidth
	inputArray[i] = new Array(arrayWidth);
	for (var j=0; j<arrayWidth; j++) {
		inputArray[i][j] = 0;
	}
}
var answer2 = 0;

function surrounding(inArray,x,y) {
	var calc = (inArray[x-1][y-1] + 	// NW
		   		inArray[x][y-1] +	// N
			    inArray[x+1][y-1] +	// NE
			    inArray[x+1][y] +	// E
			    inArray[x+1][y+1] +	// SE
			    inArray[x][y+1] +	// S
			    inArray[x-1][y+1] +	// SW
			    inArray[x-1][y]);	// W
	if ((answer2 == 0) && (calc > puzzleInput)) {		// check for winner
		console.log('Answer is : ' + answer2); 
		answer2 = calc;
	}
	return(calc);
}

var xPos = Math.floor(arrayWidth/2);
var yPos = Math.floor(arrayWidth/2);

console.log('Today\'s input is ' + puzzleInput + '.');

inputArray[xPos][yPos] = 1; // Start out with 1 in the center


for (var square=3;square<13;square=square+2) // spiral CCW to RT
	{
		xPos++; // start off the ring to the right
		inputArray[xPos][yPos] = surrounding(inputArray,xPos,yPos); // load first position
		console.log(xPos,yPos,inputArray[xPos][yPos]);
		
		for (var delta=0;delta<square-2;delta++) // up  right side (minus the one we did)
		{
			yPos--;
			inputArray[xPos][yPos] = surrounding(inputArray,xPos,yPos); // load cell
			console.log(inputArray[xPos][yPos]);
		}

		for (var delta=0;delta<square-1;delta++) // across the top to the left
		{
			xPos--;
			inputArray[xPos][yPos] = surrounding(inputArray,xPos,yPos); // load cell
			console.log(inputArray[xPos][yPos]);
		}
		
		for (var delta=0;delta<square-1;delta++) // down the left side
		{
			yPos++;
			inputArray[xPos][yPos] = surrounding(inputArray,xPos,yPos); // load cell
			console.log(inputArray[xPos][yPos]);
		}
		
		for (var delta=0;delta<square-1;delta++) // across the bottom to the right
		{
			xPos++;
			inputArray[xPos][yPos] = surrounding(inputArray,xPos,yPos); // load cell
			console.log(inputArray[xPos][yPos]);
		}
	}

console.log('Ending at x,y: ' + xPos + ',' + yPos);

console.log('Answer to Day 3 Part 1 = 371 (figured it out manually)');

console.log('Answer to Day 3 Part 2 = ' + answer2);

console.log(inputArray);