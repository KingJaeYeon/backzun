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

for(let i = 1; i < ballInputCnt+1 ; i++) {
    const [start, end] = input[i];
    newArr.splice(start - 1, end - start + 1, ...newArr.slice(start - 1, end).reverse())
}
console.log(newArr.join(' '));