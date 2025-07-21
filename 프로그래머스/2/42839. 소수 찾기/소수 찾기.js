function solution(numbers) {
  const numPieces = numbers.split('');
  const numberSet = new Set();

  const getPermutations = (arr, len, current = '') => {
    if (current.length === len) {
      numberSet.add(Number(current));
      return;
    }

    arr.forEach((_, idx) => {
      const next = [...arr];
      next.splice(idx, 1);
      getPermutations(next, len, current + arr[idx]);
    });
  };

  for (let i = 1; i <= numPieces.length; i++) {
    getPermutations(numPieces, i);
  }

  const isPrime = (n) => {
    if (n === 2) return true;
    if (n < 2 || n % 2 === 0) return false;

    const sqrt = Math.sqrt(n);
    for (let i = 3; i <= sqrt; i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  };

  return [...numberSet].filter(isPrime).length;
}