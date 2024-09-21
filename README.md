https://help.acmicpc.net/language/info


//입력값이 하나일 경우(숫자)
//input: 8
//output: 8
const input = +require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim();

//입력값이 띄어쓰기로 구분된 한 줄의 값들인 경우(문자)
//input: hello world
//output: ['hello', 'world']
const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(" ");

//입력값이 띄어쓰기로 구분된 한 줄의 값들인 경우(숫자)
//input: 8 7 56
//output: [8, 7, 56]
const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

// 입력값이 여러 줄의 값들인 경우(문자)
//input:
//a
//b
//c
//d
//output: ['a', 'b', 'c', 'd']
const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");

// 입력값이 여러 줄의 값들인 경우(숫자)
//input:
//1
//2
//3
//4
//5
//output: [1, 2, 3, 4, 5]
const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);


// 입력값이 여러 줄의 값들이 띄어쓰기로 구분되어 있는 경우(문자)
//input:
//ab cd
//ef gh
//my name is minjoon
//hi hello
//output: [
//  [ 'ab', 'cd' ],
//  [ 'ef', 'gh' ],
//  [ 'my', 'name', 'is', 'minjoon' ],
//  [ 'hi', 'hello' ]
//]
const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" "));


// 입력값이 여러 줄의 값들이 띄어쓰기로 구분되어 있는 경우(모두 숫자)
//input:
//3
//1 2
//3 4 5 6
//5 3 2 5
//0 1 1 0
//output: [ [ 3 ], [ 1, 2 ], [ 3, 4, 5, 6 ], [ 5, 3, 2, 5 ], [ 0, 1, 1, 0 ] ]
const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));


