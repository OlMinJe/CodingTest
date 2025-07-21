function solution(brown, yellow) {
  const total = brown + yellow;

  for (let height = 3; height <= Math.sqrt(total); height++) {
    if (total % height !== 0) continue;
    const width = total / height;

    if (width < height) continue;

    const yellowWidth = width - 2;
    const yellowHeight = height - 2;
    if (yellowWidth * yellowHeight === yellow) return [Number(width), height];
  }
}