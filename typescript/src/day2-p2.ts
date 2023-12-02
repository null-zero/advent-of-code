import * as fs from 'fs';

const file = fs.readFileSync('./day2.input', 'utf-8');
const gameList = file.split('\r\n');


let gameCounts = new Map();
gameList.forEach((game) => {
    let reg = /Game (\d+): /;

    const curr_game = game.match(reg);
    if (curr_game){
        gameCounts.set(curr_game[1], new Map());
        gameCounts.get(curr_game[1]).set("red", 0);
        gameCounts.get(curr_game[1]).set("green", 0);
        gameCounts.get(curr_game[1]).set("blue", 0);
        let rounds = game.split(/: |; /);

        let round_reg = /((\d+) (blue|red|green))/g;
        rounds.forEach((round) => {
            const curr_round = [...round.matchAll(round_reg)];
            if (curr_round) {
                curr_round.forEach((match) => {
                    if (match[3] == "red" && parseInt(match[2]) > gameCounts.get(curr_game[1]).get("red")) {
                        gameCounts.get(curr_game[1]).set("red", parseInt(match[2]));
                    } else if (match[3] == "green" && parseInt(match[2]) > gameCounts.get(curr_game[1]).get("green")) {
                        gameCounts.get(curr_game[1]).set("green", parseInt(match[2]));
                    } else if (match[3] == "blue" && parseInt(match[2]) > gameCounts.get(curr_game[1]).get("blue")) {
                        gameCounts.get(curr_game[1]).set("blue", parseInt(match[2]));
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
    let power = res.get('red') * res.get('green') * res.get('blue');
    sum += power;
})
console.log(sum);