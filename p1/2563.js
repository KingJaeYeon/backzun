const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));


const cnt = input[0][0];
const line = 10;

for (let i = 1; i < cnt + 1; i++) {
    const [x,y] = input[i];

}