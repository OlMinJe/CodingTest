function solution(n) {
    let answer = 6;
    // 같은 수로 나눠질 때까지 +6
    while(answer%n !== 0) {
        answer+=6;
    } 
  	// 박스 수 반환
    return answer/6;
}