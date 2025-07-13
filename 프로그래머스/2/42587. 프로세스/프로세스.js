function solution(priorities, location) {
  const queue = priorities.map((priority, index) => ({ index, priority }));
  let count = 0;

  while (queue.length) {
    const current = queue.shift();
    const maxPriority = Math.max(...queue.map((item) => item.priority));

    if (current.priority < maxPriority) {
      queue.push(current);
    } else {
      count++;
      if (current.index === location) return count;
    }
  }
}
