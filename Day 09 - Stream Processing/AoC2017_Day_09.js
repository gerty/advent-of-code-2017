// Advent Of Code Puzzle #9 - Stream Processing
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// 12/9/17 - Happy Holidays! Christmas parties interfered this evening. Breakfast coding?
console.log('\n');
console.log('*** Hello to the world...day 9 is come! ***');
console.log('\n');

var fs = require("fs");
var data = fs.readFileSync('input.txt');
//var data = fs.readFileSync('test.txt');
dailyInput = data.toString(); // init daily input string

var answer1 = 0;
var answer2 = 0;

console.log('Today\'s input has ' + dailyInput.length + ' characters.');
console.log('INPUT = ' + dailyInput);


// *************** FIRST IMPLEMENTATION ****************
var score = 0;
var level = 0;
var firstPass = '';
var secondPass = '';
var insideGarbage = false;
var garbageTally = 0;

for (var i=0; i<dailyInput.length; i++) {
	if (!insideGarbage && (dailyInput[i] === '<')) insideGarbage = true;
	else if (insideGarbage && (dailyInput[i] === '!')) {
		i=i+1; // ignore '!' and char that follows - noticed input has no '!' near EOF
	}	
	else if (dailyInput[i] === '>') insideGarbage = false;
	else if (!insideGarbage) {
		firstPass += (dailyInput[i]);
	}
	else if (insideGarbage) { garbageTally++; }
} 

console.log('AFTER FIRST PASS = ' + firstPass);

for (var i=0; i<firstPass.length; i++) {
	if (firstPass[i] === '{') {
		level++;
	}
	if ((firstPass[i] === '}') && (level>0)) {
		score += level;
		level--;
		//console.log(level);
	}
}
answer1 = score;

console.log('Answer to Day 9 Part 1 is:' + answer1);
console.log('Answer to Day 9 Part 2 = ' + garbageTally); // 2620 too low, 3084 too low