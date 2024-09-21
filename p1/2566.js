const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

const arr = {}
for (let i = 0; i < input.length; i++) {
    const max = Math.max(...input[i])
    arr[max] = {value: max, row: i};
}

const max = Math.max(...Object.values(arr).map(el => el.value));
const findCol= input[arr[max].row].findIndex(el => el === max);
console.log(max)
console.log(arr[max].row + 1 ,findCol +1)