
// const WEIGHT_WORD = ['A', 'E', 'I', 'O', 'U'];

// const calcWeights = (length = 5) => {
//   const weightArray = Array(length).fill(0);
//   weightArray[length - 1] = 1;

//   for (let i = length - 2; i >= 0; i--) {
//     weightArray[i] = weightArray[i + 1] * WEIGHT_WORD.length + 1;
//   }

//   return weightArray;
// };

// function solution(word) {
//   const weight = calcWeights();
//   let answer = 0;

//   for (let i = 0; i < word.length; i++) {
//     const charIndex = WEIGHT_WORD.indexOf(word[i]);
//     answer += charIndex * weight[i] + 1;
//   }

//   return answer;
// }


function solution(word) {
    const dict = [];
    const letters = ['A', 'E', 'I', 'O', 'U'];

    function dfs(current) {
        if (current.length > 5) return;

        if (current.length > 0) dict.push(current);

        for (let i = 0; i < letters.length; i++) {
            dfs(current + letters[i]);
        }
    }

    dfs("");
    
    
    return dict.indexOf(word) + 1;
}