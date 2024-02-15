const solution = (arr, intervals) => {
  const [firstStart, firstEnd] = intervals[0];
  const [secondStart, secondEnd] = intervals[1];

  return arr.slice(firstStart, firstEnd + 1).concat(arr.slice(secondStart, secondEnd + 1));
};
