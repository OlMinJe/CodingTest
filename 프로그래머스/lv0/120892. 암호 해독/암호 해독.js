function solution(cipher, code) {
    let answer = ""
    cipher.split("").map((e, idx) => {
        if((idx+1) % code == 0) {
            answer += e;
        }
    });
    return answer;

}