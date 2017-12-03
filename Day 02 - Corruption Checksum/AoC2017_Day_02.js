// Advent Of Code Puzzle #2 - (name of puzzle here)
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// 12/2/17 - Happy Holidays to one and all! I'm late to set up - just the Nick of time!

console.log('Hello to the world...');

var fs = require("fs");
var dailyinput = '';		// init daily input string
var data = fs.readFileSync('input_day_02.txt'); // CHANGE FILENAME DAILY!!
//var data = fs.readFileSync('test_input_02.txt'); // CHANGE FILENAME DAILY!!
dailyinput = data.toString();

var len = 0;
var answer = 0;
var sheet = new Array(16);

for (var z=0; z<16; z++) {
	sheet[z] = new Array(16);
}

len = dailyinput.length; // How long is the input? A useful thing to know.
console.log(dailyinput);
console.log('Today\'s input has ' + len + ' characters.');

var lines = dailyinput.split('\n'); 
for (var i=0;i<lines.length;i++) {
	sheet[i] = lines[i].split('\t');
}

var divisibleCollection = new Array(16);
for (var init=0;init<16;init++){
	divisibleCollection[init] = 0;
}
console.log(divisibleCollection);
for (var i=0;i<16;i++) {
	for (var j=0;j<16;j++) { // now we go line by line and find the divisible numbers
		for (var k=0;k<16;k++) {
			if (k != j) { // eliminate case where we examine ourselves
				if (sheet[i][k] % sheet[i][j] == 0) {
					divisibleCollection[i] = sheet[i][k]/sheet[i][j];
				}
				if (sheet[i][j] % sheet[i][k] == 0) {
					divisibleCollection[i] = sheet[i][j]/sheet[i][k];
				}
			}
		}
	}
}

console.log(divisibleCollection);
//	if (dailyinput[i] == dailyinput[   (i+1)    % len]) { // Part 1
//	if (dailyinput[i] == dailyinput[(i+(len/2)) % len]) { // Part 2
//		answer = answer + parseInt(dailyinput[i]);  // need to add the char as an int
//		console.log("Adding " + dailyinput[i]);  // just reporting to the console

for (var sum=0;sum<16;sum++){
	answer += divisibleCollection[sum];
}

console.log('Answer to Day 2 Part 1 = ' + answer);