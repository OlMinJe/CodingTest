function solution(brown, yellow) {
  const total = brown + yellow;

  for (let i = 1; i <= total; i++) {
    const width = total / i;

    if (!Number.isInteger(width)) continue;
    if (width < i) continue;

    const innerWidth = width - 2;
    const innerHeight = i - 2;

    if (innerWidth * innerHeight === yellow) {
      return [width, i];
    }
  }
}
