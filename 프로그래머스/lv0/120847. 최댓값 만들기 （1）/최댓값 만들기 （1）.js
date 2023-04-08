function solution(numbers) {
    numbers.sort(function(a, b)  {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });
    
    return numbers[numbers.length-1] * numbers[numbers.length-2];
}