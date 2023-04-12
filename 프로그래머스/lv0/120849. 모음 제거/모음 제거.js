function solution(my_string) {
    let answer = '';
    let str = my_string.split("");
    
    const regex = /^(a|e|i|o|u)+$/;

    str.forEach(str => {
        if(!regex.test(str)) answer += str;
    })
    
    return answer;
}