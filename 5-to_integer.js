#!/usr/bin/node
// Script that converts first argument to integer if possible

const num = parseInt(process.argv[2]);

if (isNaN(num)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${num}`);
}
