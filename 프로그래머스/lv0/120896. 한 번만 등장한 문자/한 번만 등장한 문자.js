function solution(s) {
    let answer = [];
    for (let i of s) {
        if (s.indexOf(i) === s.lastIndexOf(i)) {
            answer.push(i);
        }
    }
    return answer.sort().join('');
}