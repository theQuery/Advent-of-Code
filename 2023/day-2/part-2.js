import input from './input.js';

const lines = input.split('\n');

const sum = lines.reduce((acc, line) => {
    const cubes = line.match(/(\d+\s\w+)/g);
    const game = { red: 0, green: 0, blue: 0 };

    for (const cube of cubes) {
        const [amount, color] = cube.split(' ');
        game[color] = Math.max(game[color], amount);
    };

    const { red, green, blue } = game;
    const power = red * green * blue;

    return acc + power;
}, 0);

console.log(sum);