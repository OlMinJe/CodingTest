function solution(my_string) { // v.match(/x|^[0-9]*$/g))
    let answer = 0;
    return my_string.replace(/[A-z]/g, " ").split(' ').map(e => answer += Number(e)).pop();
}