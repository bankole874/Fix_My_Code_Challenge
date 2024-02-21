#!/usr/bin/node
/*
    Print a square with the character #
    
    The size of the square must be the first argument 
    of the program.
*/


if (process.argv.length <= 2 || isNaN(parseInt(process.argv[2]))) {
    console.error("Missing or invalid argument.");
    console.error("Usage: ./1-print_square.js <size>");
    console.error("Example: ./1-print_square.js 5");
    process.exit(1);
}

const size = parseInt(process.argv[2]);
if (size <= 0) {
    console.error("Size must be a positive integer.");
    process.exit(1);
}

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        process.stdout.write("#");
    }
    console.log(); // Move to the next line with a newline character
}
