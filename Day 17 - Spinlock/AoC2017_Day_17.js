// Advent Of Code Puzzle #17 - Spinlock
// Programming in JavaScript via command line node
// Repo located at https://github.com/gerty/advent-of-code-2017
// Comments and suggestions welcome

// Happy Holidays! Oil change taking too long. No problem... catching up on Day 16.
console.log('Hello to the world...day 17 is come!');

const inputSpin = 3; // 344 real, 3 test
var answer1 = 0;
var answer2 = 0;
var spinlock = [0];
var pos = 0;

for (var z=0;z<8;z++) {
	pos += inputSpin;
	pos %= spinlock.length;
	spinlock = spinlock.splice(pos,0,z); 
	console.log(spinlock);
}

answer = spinlock[(pos+1) % spinlock.length];

console.log('Answer to Day 16 Part 1 = ' + answer1);
// Now for Part 2
console.log('Answer to Day 16 Part 2 = ' + answer2);
