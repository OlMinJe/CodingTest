function solution(citations) {
  citations.sort((a, b) => b - a);

  const idx = citations.findIndex((item, i) => item < i + 1);
  return idx === -1 ? citations.length : idx;
}
