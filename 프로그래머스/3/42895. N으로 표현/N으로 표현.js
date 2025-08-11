function solution(N, number) {
    if (N === number) return 1;
    
    const LIMIT = 32000 * 2
    const minimum = new Map();
    const dp = Array.from({ length: 9 }, () => new Set());
    
    let concat = 0;
    
    const inRange = (x) => LIMIT === 0 ? true : (x >= -LIMIT && x <= LIMIT);
    
    const tryAdd = (set, val, cost) => {
        if (!inRange(val)) return;
        
        const prev = minimum.get(val);
        if (prev !== undefined && prev <= cost) return;
        
        minimum.set(val, cost);
        set.add(val);
    }
    
    for (let i = 1; i <= 8; i++) {
        concat = concat * 10 + N;
        tryAdd(dp[i], concat, i);
        
        if (concat === number) return i;
        
        for (let j = 1; j < i; j++) {
            const A = dp[j];
            const B = dp[i - j];
            
            for (const a of A) {
                for (const b of B) {
                    if (a <= b) tryAdd(dp[i], a + b, i);
                    tryAdd(dp[i], a - b, i); 
                    tryAdd(dp[i], b - a, i);
                    
                    if (a <= b) tryAdd(dp[i], a * b, i);
                    if (b !== 0) tryAdd(dp[i], Math.trunc(a / b), i);
                    if (a !== 0) tryAdd(dp[i], Math.trunc(b / a), i);
                }
            }
        }
        
        if (dp[i].has(number)) return i;
    }

  return -1;
}