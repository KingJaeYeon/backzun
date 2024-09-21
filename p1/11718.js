const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")


for (let i = 0 ; i < input.length ; i++) {
    const str = input[i];
    console.log(str);
}