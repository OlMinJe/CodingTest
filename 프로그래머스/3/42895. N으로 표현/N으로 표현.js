function solution(N, number) {
    let dp = Array.from({length : 9}, () => new Set());
    for(let i = 1 ; i <= 8 ;i++) {
        let stringN = '';

        for(let j = 0 ; j < i ; j++) {
            stringN += String(N);
        }

        dp[i].add(Number(stringN));

        for(let k = 1 ; k < i ; k++) {
            for(const a of dp[k]) {
                for(const b of dp[i-k]) {
                    dp[i].add(a+b);
                    dp[i].add(a-b);
                    dp[i].add(a*b);
                    dp[i].add(a/b);
                }
            }
        }

        if(dp[i].has(number)) return i
    }

    return -1;
}