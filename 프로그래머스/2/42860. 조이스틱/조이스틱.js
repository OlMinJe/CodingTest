function solution(name) {
  let totalMove = 0;

  for (let i = 0; i < name.length; i++) {
    const charCode = name.charCodeAt(i);
    const upDownMove = Math.min(charCode - 65, 91 - charCode);
    totalMove += upDownMove;
  }

  let minCursorMove = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    let next = i + 1;

    while (next < name.length && name[next] === 'A') {
      next++;
    }

    const moveRightThenLeft = i * 2 + (name.length - next);
    const moveLeftThenRight = (name.length - next) * 2 + i;

    minCursorMove = Math.min(minCursorMove, moveRightThenLeft, moveLeftThenRight);
  }

  return totalMove + minCursorMove;
}
