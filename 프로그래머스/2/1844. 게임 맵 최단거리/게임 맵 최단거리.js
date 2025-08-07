function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const endX = n - 1;
  const endY = m - 1;

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  visited[0][0] = true;

  const queue = [[0, 0, 1]];
  let head = 0; 

  const isValid = (x, y) =>
    x >= 0 && y >= 0 && x < n && y < m && maps[x][y] === 1 && !visited[x][y];

  while (head < queue.length) {
    const [x, y, dist] = queue[head++];

    if (x === endX && y === endY) return dist;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (isValid(nx, ny)) {
        visited[nx][ny] = true;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }

  return -1;
}
