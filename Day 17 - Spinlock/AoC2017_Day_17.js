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

var startTime = Date.now();

//for (var z=1;z<=2017;z++) {
//	pos = (pos + inputSpin) % spinlock.length;
//	spinlock.splice(++pos,0,z); 
//	zeroLocations.add(spinlock[(spinlock.indexOf(0)+1)%(spinlock.length)]);	
//}
//answer1 = spinlock[(pos+1)%(spinlock.length)];

//for (var z=1;z<=500000;z++) {
//	pos = (pos + inputSpin) % spinlock.length;
//	spinlock.splice(++pos,0,z); 
//	zeroLocations.add(spinlock[(spinlock.indexOf(0)+1)%(spinlock.length)]);	
//}

var midTime = Date.now();

function getAllLess(x) {
	if (x===0) { return(0); }
	else {
		return((getAllLess(x-1)+(inputSpin)) % x);
	}
}

for (var y=1;y<=20;y++) {
	pos = (pos + inputSpin) % spinlock.length;
	spinlock.splice(++pos,0,y); 
	console.log(spinlock);
}

for (var i=0; i<20; i++) {
	console.log('getAllLess(' + i + ') = ' + getAllLess(i));	
}


var endTime = Date.now();

answer2 = spinlock[(spinlock.indexOf(0)+1)%(spinlock.length)];
console.log('Answer to Day 16 Part 1 = ' + answer1);

// Now for Part 2
var duration1 = (midTime-startTime)/1000.0;
var duration2 = (endTime-midTime)/1000.0;
console.log('Runtime without set recording: ' + duration1);
console.log('Runtime with set recording: ' + duration2);
console.log('Answer to Day 16 Part 2 = ' + answer2); // 187773 is too low
