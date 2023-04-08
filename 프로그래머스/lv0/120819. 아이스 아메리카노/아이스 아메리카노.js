function solution(money) {
    const americano = 5500;
    const num = Math.floor(money / americano);
    const change = money % americano;
    let answer = [num, change];
    return answer;
}