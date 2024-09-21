// https://www.acmicpc.net/problem/10810
import fs from 'fs';

const input = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

const totalBasket = input[0][0];
const ballInputCnt = input[0][1];


const newArr = new Array(totalBasket).fill(0)

for(let i = 1; i < ballInputCnt + 1; i++) {
    const [start, end, ball] = input[i];
    newArr.fill(ball, start - 1, end)
}
console.log(newArr.join(' '));