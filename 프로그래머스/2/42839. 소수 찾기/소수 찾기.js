function getPermutations(arr, r) {
  if (r === 1) return arr.map((v) => [v]);
  const result = [];
    
  arr.forEach((fixed, idx) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const perms = getPermutations(rest, r - 1);
    const attached = perms.map((p) => [fixed, ...p]);
    result.push(...attached);
  });

  return result;
}

function solution(numbers) {
  const numPieces = numbers.split('');
  const numberSet = new Set();

  for (let i = 1; i <= numPieces.length; i++) {
    const perms = getPermutations(numPieces, i);
    perms.forEach((perm) => numberSet.add(Number(perm.join(''))));
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