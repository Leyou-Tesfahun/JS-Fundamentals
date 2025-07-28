#!/usr/bin/node
// Script that prints two arguments in "is" format

const args = process.argv.slice(2);
const first = args[0] || 'undefined';
const second = args[1] || 'undefined';

console.log(`${first} is ${second}`);
