const FIXED_WORD = ['A', 'E', 'I', 'O', 'U'];

const calcWeights = (length = 5) => {
  const weight = Array(length).fill(0);
  weight[length - 1] = 1;

  for (let i = length - 2; i >= 0; i--) {
    weight[i] = weight[i + 1] * FIXED_WORD.length + 1;
  }

  return weight;
};

function solution(word) {
  const weight = calcWeights();
  let answer = 0;

  for (let i = 0; i < word.length; i++) {
    const charIndex = FIXED_WORD.indexOf(word[i]);
    answer += charIndex * weight[i] + 1;
  }

  return answer;
}