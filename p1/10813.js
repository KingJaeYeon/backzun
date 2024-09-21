var fs = require('fs');
const input = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

const totalBasket = input[0][0];
const ballInputCnt = input[0][1];


const newArr = Array.from({length: totalBasket}, (_, v) => v+1)

for(let i = 1; i < ballInputCnt + 1 ; i++) {
    const [start, end] = input[i];
    const temp= [newArr[start-1], newArr[end-1]];
    newArr[start-1] = temp[1];
    newArr[end-1] = temp[0];
}
console.log(newArr.join(' '));