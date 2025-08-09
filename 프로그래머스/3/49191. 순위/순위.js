function solution(n, results) {
  if (!Number.isInteger(n) || n < 1 || n > 100) throw new TypeError('n은 1 이상 100 이하의 정수');
  if (!Array.isArray(results)) throw new TypeError('results는 2차원 배열');

  const W = 32;
  const WORDS = Math.ceil((n + 1) / W);

  const setBit = (row, j) => {
    const idx = (j / W) | 0;
    const off = j % W;
    row[idx] |= (1 << off) >>> 0;
  };

  const hasBit = (row, j) => {
    const idx = (j / W) | 0;
    const off = j % W;
    return (row[idx] >>> off) & 1;
  };

  const orRow = (row, other) => {
    for (let w = 0; w < WORDS; w++) row[w] |= other[w];
  };

  const pop32 = (x) => {
    x = x - ((x >>> 1) & 0x55555555);
    x = (x & 0x33333333) + ((x >>> 2) & 0x33333333);
    return (((x + (x >>> 4)) & 0x0f0f0f0f) * 0x01010101) >>> 24;
  };

  const countBits = (row) => {
    let s = 0;
    for (let w = 0; w < WORDS; w++) s += pop32(row[w]);
    return s;
  };

  const winBits = Array.from({ length: n + 1 }, () => new Uint32Array(WORDS));

  for (const e of results) {
    if (!Array.isArray(e) || e.length !== 2) continue;
    let [a, b] = e;
    if (!Number.isInteger(a) || !Number.isInteger(b)) continue;
    if (a < 1 || a > n || b < 1 || b > n || a === b) continue;
    setBit(winBits[a], b); // a가 b를 이김
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      if (i === k) continue;
      if (hasBit(winBits[i], k)) orRow(winBits[i], winBits[k]);
    }
  }

  const loseBits = Array.from({ length: n + 1 }, () => new Uint32Array(WORDS));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === j) continue;
      if (hasBit(winBits[i], j)) setBit(loseBits[j], i);
    }
  }

  let answer = 0;
  for (let i = 1; i <= n; i++) {
    const wins = countBits(winBits[i]);
    const losses = countBits(loseBits[i]);
    if (wins + losses === n - 1) answer++;
  }

  return answer;
}
