function solution(num, total) {
  const min = Math.ceil(total / num - Math.floor(num / 2));
  return Array.from({ length: num }, (v, i) => i + min);
}