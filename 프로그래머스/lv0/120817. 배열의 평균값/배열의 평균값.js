function solution(numbers) {
    let answer = numbers;
    let sum = 0;
    
    for(let i = 0; i < answer.length; i++) {
        sum += answer[i];
    }
    
    let avg = sum / answer.length;
    
    return avg;
}