let input =1000- +require("fs")
        .readFileSync(process.platform==="linux" ? "/dev/stdin":"./input.txt")
        .toString()
        .trim();

const coin = [500, 100, 50, 10, 5, 1];

let answer = 0;
for (let i = 0; i < coin.length; i++) {
    // 몫을 구하면 해당 동전의 개수가 나온다.
    const num = Math.floor(input / coin[i]);
    answer += num;

    // 나머지 값으로 다음 동전을 계산한다.
    input %= coin[i];
}

console.log(answer);
