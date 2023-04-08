function solution(array, n) {
    // [1]
    /*
    var answer = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            answer++;
        }
    }
    
    return answer;
    */
    
    return array.filter(v => v === n).length;
}