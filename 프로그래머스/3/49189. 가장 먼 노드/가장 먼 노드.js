function solution(n, vertex) {
  if (!Number.isInteger(n) || n < 1) throw new TypeError('n은 1 이상의 정수여야 합니다.');
  if (!Array.isArray(vertex)) throw new TypeError('vertex는 2차원 배열이어야 합니다.');

  const g = Array.from({ length: n + 1 }, () => []);

  for (const e of vertex) {
    if (!Array.isArray(e) || e.length !== 2) continue;

    let [a, b] = e;

    if (!Number.isInteger(a) || !Number.isInteger(b)) continue;

    if (a === b) continue;
    if (a < 1 || a > n || b < 1 || b > n) continue;

    g[a].push(b);
    g[b].push(a);
  }

  const dist = new Array(n + 1).fill(-1);
  const q = new Array(n);
  let head = 0;
  let tail = 0;

  dist[1] = 0;
  q[tail++] = 1;

  while (head < tail) {
    const cur = q[head++];
    const nextDist = dist[cur] + 1;

    for (const nxt of g[cur]) {
      if (dist[nxt] !== -1) continue;
      dist[nxt] = nextDist;
      q[tail++] = nxt;
    }
  }

  let maxD = 0;
  for (let i = 1; i <= n; i++) if (dist[i] > maxD) maxD = dist[i];

  let count = 0;
  for (let i = 1; i <= n; i++) if (dist[i] === maxD) count++;

  return count;
}
