import input from './input.js';

const lines = input.split('\n');
const numberRegex = /\d+/g;
const symbolRegex = /[^0-9.]/g;

const sum = lines.reduce((acc, line, index) => {
    const matches = Array.from(line.matchAll(numberRegex));

    const numbers = matches.reduce((acc, match) => {
        const number = match[0];
        const start = match.index || 1;
        const end = match.index + number.length;

        const ceiling = lines[index - 1]?.slice(start - 1, end + 1);
        const floor = lines[index + 1]?.slice(start - 1, end + 1);
        const left = line[start - 1];
        const right = line[end];

        const sides = [ceiling, floor, left, right];
        const isPartNumber = sides.some(side => side?.match(symbolRegex));
        const partNumber = isPartNumber ? parseInt(number) : 0;

        return acc + partNumber;
    }, 0);

    return acc + numbers;
}, 0);

console.log(sum);