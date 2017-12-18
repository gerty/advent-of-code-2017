// Advent Of Code Puzzle #17 - Spinlock
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// Happy Holidays! Some alone time in the garage office to finish Day 17.
console.log('Hello to the world...day 17 is come!');

const inputSpin = 344; // 344 real, 3 test
var answer1 = 0;
var answer2 = 0;
var spinlock = [0];
var pos = 0;
var zeroLocations = new Set();

var startTime = getTime();

for (var z=1;z<=2017;z++) {
	pos = (pos + inputSpin) % spinlock.length;
	spinlock.splice(++pos,0,z); 
	zeroLocations.add(spinlock[(spinlock.indexOf(0)+1)%(spinlock.length)]);	
}

answer1 = spinlock[(pos+1)%(spinlock.length)];

for (var z=1;z<=5000;z++) {
	pos = (pos + inputSpin) % spinlock.length;
	spinlock.splice(++pos,0,z); 
	zeroLocations.add(spinlock[(spinlock.indexOf(0)+1)%(spinlock.length)]);	
}

var midTime = getTime();

for (var y=1;y<=5000;y++) {
	pos = (pos + inputSpin) % spinlock.length;
	spinlock.splice(++pos,0,y); 
}

var endTime = getTime();
var duration1 = (midTime-startTime)/1000;
var duration2 = (endTime-midTime)/1000;
answer1 = spinlock[(spinlock.indexOf(0)+1)%(spinlock.length)];

console.log('Runtime without set recording: ' + duration1);
console.log('Runtime with set recording: ' + duration1);


console.log('Answer to Day 16 Part 1 = ' + answer1);
// Now for Part 2
console.log('Answer to Day 16 Part 2 = ' + answer2); // 187773 is too low
