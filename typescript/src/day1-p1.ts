import * as fs from 'fs';

const file = fs.readFileSync('./input.txt', 'utf-8');
const wordList = file.split('\r\n');

var sum = 0;
wordList.forEach((word, index) => {
    const re = /\d/g;
    const matches = [...word.matchAll(re)];
    if (matches) {
        let string:string = matches[0][0] + matches[matches.length - 1][0];
        console.log(`${word} : ${matches[0][0]} - ${matches[matches.length - 1][0]}`);
    
    
        sum += parseInt(string);
    }
})

console.log(sum);