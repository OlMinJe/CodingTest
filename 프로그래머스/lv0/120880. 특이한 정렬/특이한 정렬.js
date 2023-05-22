function solution(numlist, n) {
    return numlist.sort((a, b) => {
        const [i, j] = [Math.abs(a-n), Math.abs(b-n)];
        if(i === j) return b - a
        return i - j;
    })
}