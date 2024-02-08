const solution = (num_list) =>
  Math.pow(
    num_list.reduce((acc, cur) => acc + cur),
    2
  ) >= num_list.reduce((acc, cur) => acc * cur, 1)
    ? 1
    : 0;
