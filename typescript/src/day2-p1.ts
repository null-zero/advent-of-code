import * as fs from 'fs';

const file = fs.readFileSync('./day2.input', 'utf-8');
const gameList = file.split('\r\n');


let gameCounts = new Map();
gameList.forEach((game) => {

    let red = 12;
    let green = 13;
    let blue = 14;

    let reg = /Game (\d+): /;

    const curr_game = game.match(reg);
    if (curr_game){
        gameCounts.set(curr_game[1], new Map());
        gameCounts.get(curr_game[1]).set("red", true);
        gameCounts.get(curr_game[1]).set("green", true);
        gameCounts.get(curr_game[1]).set("blue", true);
        let rounds = game.split(/: |; /);

        let round_reg = /((\d+) (blue|red|green))/g;
        rounds.forEach((round) => {
            const curr_round = [...round.matchAll(round_reg)];
            if (curr_round) {
                curr_round.forEach((match) => {
                    if (match[3] == "red" && parseInt(match[2]) > red) {
                        gameCounts.get(curr_game[1]).set("red", false);
                    } else if (match[3] == "green" && parseInt(match[2]) > green) {
                        gameCounts.get(curr_game[1]).set("green", false);
                    } else if (match[3] == "blue" && parseInt(match[2]) > blue) {
                        gameCounts.get(curr_game[1]).set("blue", false);
                    } else {
                        return;
                    }
                });
            }
        });
    }
})

let sum = 0;
gameCounts.forEach((res, game) => {
    if (res.get('red') && res.get('green') && res.get('blue')) {
        sum += parseInt(game);
    }
})
console.log(sum);