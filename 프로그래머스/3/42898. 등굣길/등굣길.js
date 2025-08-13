function solution(m, n, puddles) {
  const MOD = 1_000_000_007;
  const key = (x, y) => `${x},${y}`;

  const water = new Set(puddles.map(([x, y]) => key(x, y)));
  const dp = Array(m + 1).fill(0);
  dp[1] = 1;

  for (let y = 1; y <= n; y++) {
    for (let x = 1; x <= m; x++) {
      if (water.has(key(x, y))) {
        dp[x] = 0;
        continue;
      }

      if (x === 1 && y === 1) {
        dp[x] = 1;
        continue;
      }
      const left = x > 1 ? dp[x - 1] : 0;
      dp[x] = (dp[x] + left) % MOD;
    }
  }
  return dp[m];
}
