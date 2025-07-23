function solution(n, wires) {
  let minDiff = Infinity;

  const countNodes = (start, graph, visited) => {
    let count = 1;
    const queue = [start];
    visited[start] = true;

    while (queue.length > 0) {
      const node = queue.shift();
      for (const next of graph[node]) {
        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
          count++;
        }
      }
    }

    return count;
  };

  for (let i = 0; i < wires.length; i++) {
    const graph = Array.from({ length: n + 1 }, () => []);

    for (let j = 0; j < wires.length; j++) {
      if (i === j) continue;
      const [a, b] = wires[j];
      graph[a].push(b);
      graph[b].push(a);
    }

    const visited = Array(n + 1).fill(false);
    const groupSize = countNodes(1, graph, visited);
    const otherSize = n - groupSize;

    const diff = Math.abs(groupSize - otherSize);
    minDiff = Math.min(minDiff, diff);
  }

  return minDiff;
}