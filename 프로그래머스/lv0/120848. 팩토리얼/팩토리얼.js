function solution(n) {
    let answer = 0;
    let num = 1
    for(let i = 1; num <= n; i++) {
        num *= i;
        answer++;
    }
    return answer-1;
}