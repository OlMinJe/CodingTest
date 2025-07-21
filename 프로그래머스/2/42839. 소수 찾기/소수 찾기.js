function solution(numbers) {
  let answer = 0;
  const numberSet = new Set();

  const getPermutations = (arr, prefix = '') => {
    if (prefix.length > 0) {
      numberSet.add(Number(prefix));
    }

    for (let i = 0; i < arr.length; i++) {
      const next = [...arr];
      next.splice(i, 1);

      getPermutations(next, prefix + arr[i]);
    }
  };

  getPermutations(numbers.split(''));

  for (const num of numberSet) {
    if (isPrime(num)) answer++;
  }

  return answer;
}

const isPrime = (n) => {
  if(n < 2) return false;

  for(let i = 2 ; i <= Math.floor(Math.sqrt(n)); i++) {
    if(n%i === 0) return false;
  }

  return true;
}