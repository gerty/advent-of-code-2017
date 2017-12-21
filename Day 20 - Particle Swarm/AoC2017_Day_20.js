// Advent Of Code Puzzle #20 - Particle Swarm
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// Happy Holidays! Might give it a go before utter collapse.
console.log('Hello to the world...day 20 is come!');

var fs = require("fs");
//var data = fs.readFileSync('input.txt');
var data = fs.readFileSync('test.txt');
var dailyInput = data.toString();
var answer1 = 0;
var answer2 = 0;

// create a prototype object for particles - HOW?
var particles = []; // create array for particle objects

var inputParsed = dailyInput.split('\n'); // splitting the input into lines by newline
console.log(inputParsed);

// then load an array of particle objects
for (var z=0; z<inputParsed.length; z++) {
	var pva = inputParsed[z]; // get each line
	var a = pva.substring(pva.lastIndexOf("<")+1,pva.lastIndexOf(">"));
	pva = pva.substring(0,pva.lastIndexOf("<"));  // cut it off
	var v = pva.substring(pva.lastIndexOf("<")+1,pva.lastIndexOf(">"));
	pva = pva.substring(0,pva.lastIndexOf("<"));  // cut it off
	var p = pva.substring(pva.lastIndexOf("<")+1,pva.lastIndexOf(">"));
	
	particlespInt[z][0] = parseInt(particle[z].split(','));
	pInt[z][1] = parseInt(particle[z][1].split(','));
	pInt[z][2] = parseInt(particle[z][2].split(','));
	console.log('  p = ' + particle[z][0] + 
				', v = ' + particle[z][1] + 
				', a = ' + particle[z][2]);	
}
for (var i=0; i<inputParsed.length; i++) { // create firewall, populate rows in input
// do something with the data?
}

answer1 = 0;

console.log('Answer to Day 20 Part 1 = ' + answer1);
// Now for Part 2
console.log('Answer to Day 20 Part 2 = ' + answer2);