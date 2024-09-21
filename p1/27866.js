const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" "));

const str = input[0][0];
const num = Number(input[1][0]);

console.log(str.split('')[num-1]);