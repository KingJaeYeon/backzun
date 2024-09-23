let input =+require("fs")
        .readFileSync(process.platform==="linux" ? "/dev/stdin":"./input.txt")
        .toString()
        .trim();

const coin = [5,2];
const error = [1,3]
let answer = 0;
if (error.includes(input)){
    console.log(-1);
    return;
}

let num = Math.floor(input / coin[0]);
const rest = input - num * coin[0];
if (rest % 2 !== 0){
    num--;
}
answer +=num;
input -= num * coin[0];
answer += Math.floor(input / coin[1]);

console.log(answer);
