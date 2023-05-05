function solution(array) {
    let answer = array.join('').split('').filter(e => e === '7')
    return answer.length;
}