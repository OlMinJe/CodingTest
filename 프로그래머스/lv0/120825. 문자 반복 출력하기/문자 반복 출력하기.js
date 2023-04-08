function solution(my_string, n) {
    let answer = "";
    let str = my_string.split("");
    
    for(let strArr of str) {
        for(let i = 0; i < n; i++) {
            answer += strArr;
        }
    }
    
    return answer;
}