function solution(n) {
    let answer = [];
    let idx = 2;
    let num = n
    
    while(idx <= num) {
        if(num % idx === 0) {
            answer.push(idx);
            num /= idx;    
            idx = 1;
        }
        idx++;
    }
    return [...new Set(answer)];
}