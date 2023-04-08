function solution(n, k) {
    return n >= 10 ? (n*12000 + (k-= (n/10 << 0)) * 2000) : n * 12000 + k * 2000;
}