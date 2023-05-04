console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0){
        console.log(i)
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++){
    if (1 % 3 == 0 && i % 5 == 0){
        console.log(i, "FIZZBUZZ");
    } else if(i % 3 == 0){
        console.log(i, "FIZZ");
    } else if (i % 5 == 0){
        console.log(i, "BUZZ");
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
i = 1;

while(i <= 100) {
    if (i % 2 != 0) {
        console.loh(i);
    }
    i++;
}

console.log("Do-While");
i = 1;

do {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "FIZZBUZZ");
    } else if (i % 3 == 0) {
        console.log (i, 'FIZZ');
    } else if (i % 5 == 0) {
        console.log(i, 'BUZZ');
    }
    1++;
} while(i <= 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500-100) + 100);

var i = 0;
for (; i <= n; i++) {
    if (i == value) {
        console.log(`Found value ${value}!`);
        break;
    }
}

if (i != value) {
    console.log(`Did not find value ${value}1`);
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
var p = Math.round(Math.random() * (1000-1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= p; 1++){
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
        console.log(`FIZZBUZZ`);
    } else if ( i % fizzDivisor == 0) {
        console.log(i, `FIZZ`);
    } else if (i % buzzDivisor == 0) {
        console.log(i, `BUZZ`);
    }
}

console.log(`fizzDivisor: ${fizzDivisor}`);
console.log(`buzzDivisor: ${buzzDivisor}`);
console.log(`start: ${start}`);
console.log(`n = ${p}`);