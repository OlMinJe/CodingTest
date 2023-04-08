function solution(num_list) {
    let answer = [];
    let cnt01 = 0;
    let cnt02 = 0;
    
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 == 0) {
            cnt01++;
        } else {
            cnt02++
        }
    }
    answer.push(cnt01);
    answer.push(cnt02);
    
    return answer;
}