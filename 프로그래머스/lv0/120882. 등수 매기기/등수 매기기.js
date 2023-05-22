function solution(score) {
    let avg = score.map(e => (e[0] + e[1]) / 2);
    let sort = avg.slice().sort((a,b) => b - a);
    return avg.map(e => sort.indexOf(e) + 1);
}