const mergeFn = (row, dp) => row.map((v, i) => v + Math.max(dp[i], dp[i + 1]));

function solution(triangle) {
  if (triangle.length === 0) return 0;

  const bottom = triangle[triangle.length - 1];

  const answer = triangle.slice(0, -1).reduceRight((dp, row) => mergeFn(row, dp), bottom);
  return answer[0];
}