import input from './input.js';

const lines = input.split('\n');
const sum = lines.reduce((acc, line) => {
    line = line.replace(/[a-z]/g, '');
    return acc + parseInt(line[0] + line.at(-1));
}, 0);

console.log(sum);