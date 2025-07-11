function solution(prices) {
  const answer = new Array(prices.length).fill(0);
  const stack = [];

  prices.forEach((price, i) => {
    while (stack.length && price < prices[stack.at(-1)]) {
      const idx = stack.pop();
      answer[idx] = i - idx;
    }
    stack.push(i);
  });

  while (stack.length) {
    const idx = stack.pop();
    answer[idx] = prices.length - 1 - idx;
  }
  return answer;
}
