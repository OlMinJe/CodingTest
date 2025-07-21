const solution = (answers) => {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = patterns.map((pattern) =>
    answers.reduce((acc, answer, idx) => acc + (answer === pattern[idx % pattern.length] ? 1 : 0), 0)
  );

  const maxScore = Math.max(...scores);

  const result = scores.map((score, idx) => (score === maxScore ? idx + 1 : null)).filter(n => n !== null);
  return result;
};
