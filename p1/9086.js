const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" "));

const inputCnt = Number(input[0][0]);
for( let i = 1 ; i < inputCnt + 1 ; i++ ){
    const str = input[i][0].match(/[a-zA-Z]/g).join('');
    const start = str.split('').shift();
    const end = str.split('').pop();
    console.log(start+end??start);
}