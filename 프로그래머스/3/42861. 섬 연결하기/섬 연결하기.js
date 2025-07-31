function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]);

  const parent = Array.from({ length: n }, (_, i) => i);

  function find(x) {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
  }

  function union(a, b) {
    const rootA = find(a);
    const rootB = find(b);
    if (rootA !== rootB) {
      parent[rootB] = rootA;
      return true;
    }
    return false;
  }

  let totalCost = 0;
  let edgesUsed = 0;

  for (const [a, b, cost] of costs) {
    if (union(a, b)) {
      totalCost += cost;
      edgesUsed++;
      if (edgesUsed === n - 1) break;
    }
  }

  return totalCost;
}
