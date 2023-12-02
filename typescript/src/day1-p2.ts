import * as fs from 'fs';

const file = fs.readFileSync('./input.txt', 'utf-8');
const wordList = file.split('\r\n');

var sum = 0;
wordList.forEach((word, index) => {
    const re = /\d|one|two|three|four|five|six|seven|eight|nine/g;
    let spelledNum = new Map ([
        ["0", "0"],
        ["1", "1"],
        ["2", "2"],
        ["3", "3"],
        ["4","4"],
        ["5","5"],
        ["6","6"],
        ["7","7"],
        ["8","8"],
        ["9","9"],
        ["one", "1"],
        ["two", "2"], 
        ["three", "3"],
        ["four", "4"], 
        ["five", "5"],
        ["six", "6"],
        ["seven", "7"],
        ["eight", "8"],
        ["nine", "9"]
    ]);

    const matches = [...word.matchAll(re)];

    let firstIndex = word.length;
    let lastIndex = 0;
    let firstItem = "";
    let lastItem = "";
    spelledNum.forEach((v, k) => {
        const test = [...word.matchAll(new RegExp(k, 'g'))];
        test.forEach((match) => {
            if (match === undefined) {return}
            if (match['index'] <= firstIndex) {
                firstIndex = match['index'];
                firstItem = match[0];
            }
            if (match['index'] >= lastIndex) {
                lastIndex = match['index'];
                lastItem = match[0];
            }
        })
    });
    let string = "";
    let f = spelledNum.get(firstItem) ?? "";
    let l = spelledNum.get(lastItem) ?? "";
    string = f + l;
    sum += parseInt(string);
    console.log(`${word} : ${firstItem} - ${lastItem} : ${string}`);
})

console.log(sum);