function solution(number, k) {
  const result = [];

  for (const current of number) {
    while (k > 0 && result.length > 0 && result[result.length - 1] < current) {
      result.pop();
      k--;
    }
    result.push(current);
  }

  while (k > 0) {
    result.pop();
    k--;
  }

  return result.join('');
}
