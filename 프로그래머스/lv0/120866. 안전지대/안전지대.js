const solution = board => {
    const coordinate = [[-1, -1], [-1, 0], [-1, 1],
                        [0, -1], [0, 1],
                        [1, -1], [1, 0], [1, 1]];
    let cntTotal = 0;
    
    board.forEach((row, i) => {
        row.forEach((cell, j) => {
            if (cell===0) {
                let isFine = true;

                coordinate.forEach(([dx, dy]) => {
                    const [nx, ny] = [i+dx, j+dy];

                    if (nx>=0 && nx<board.length && ny>=0 && ny<board[0].length && board[nx][ny]===1) isFine = false;
                });
                if (isFine) cntTotal++;
            }
        });
    });

    return cntTotal;
}