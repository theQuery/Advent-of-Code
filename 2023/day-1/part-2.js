import document from './document.js';

const lines = document.split('\n');
const words = ['one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'];

const commonRegex = words.join('|') + '|[0-9]';
const firstRegex = new RegExp(commonRegex);
const lastRegex = new RegExp(`[^.]*(${commonRegex})`);

const getInt = match => {
    const int = words.indexOf(match) + 1;
    return String(int || match);
}

const sum = lines.reduce((acc, line) => {
    const firstMatch = firstRegex.exec(line)[0];
    const lastMatch = lastRegex.exec(line)[1];

    const firstInt = getInt(firstMatch);
    const lastInt = getInt(lastMatch);

    const calibration = parseInt(firstInt + lastInt);
    return acc + calibration;
}, 0);

console.log(sum);