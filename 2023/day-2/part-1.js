import input from './input.js';

const lines = input.split('\n');
const config = { red: 12, green: 13, blue: 14 };

const sum = lines.reduce((acc, line, index) => {
    const cubes = line.match(/(\d+\s\w+)/g);

    const isPossible = cubes.every(cube => {
        const [amount, color] = cube.split(' ');
        return amount <= config[color];
    });

    const gameId = isPossible ? index + 1 : 0;

    return acc + gameId;
}, 0);

console.log(sum);