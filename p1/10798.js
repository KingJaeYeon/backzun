const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");
const one = input[0].trim();
const two = input[1].trim();
const three = input[2].trim();
const four = input[3].trim();
const five = input[4];
const max = Math.max(one.length, two.length, three.length, four.length, five.length);


let answer = "";
for (let i = 0; i < max; i++) {
    if (!!one.split('')[i]) {
        answer += one.split('')[i];
    }
    if (!!two.split('')[i]) {
        answer += two.split('')[i];
    }
    if (!!three.split('')[i]) {
        answer += three.split('')[i];
    }
    if (!!four.split('')[i]) {
        answer += four.split('')[i];
    }
    if (!!five.split('')[i]) {
        answer += five.split('')[i];
    }
}
console.log(answer);