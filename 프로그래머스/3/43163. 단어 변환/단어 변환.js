function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  const isTransformable = (from, to) => {
    let diff = 0;
    for (let i = 0; i < from.length; i++) {
      if (from[i] !== to[i]) {
        diff++;
        if (diff > 1) return false;
      }
    }
    return diff === 1;
  };

  const bfs = () => {
    const visited = new Set();
    const queue = [[begin, 0]];

    while (queue.length > 0) {
      const [current, steps] = queue.shift();

      if (current === target) return steps;

      for (const nextWord of words) {
        if (!visited.has(nextWord) && isTransformable(current, nextWord)) {
          visited.add(nextWord);
          queue.push([nextWord, steps + 1]);
        }
      }
    }

    return 0;
  };

  return bfs();
}