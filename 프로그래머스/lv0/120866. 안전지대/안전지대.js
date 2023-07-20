function solution(board) {
    const coordinate = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    let cntLandMine = 0;

    board.forEach((row, i) => {
        row.forEach((cell, j) => {
            if (cell === 0) {
                let isLandMine = true;

                coordinate.forEach(([dx, dy]) => {
                    const nx = i + dx;
                    const ny = j + dy;

                    if (nx >= 0 
                        && nx < board.length 
                        && ny >= 0 
                        && ny < board[0].length 
                        && board[nx][ny] === 1) isLandMine = false;
                });

                if (isLandMine) cntLandMine++;
            }
        });
    });

    return cntLandMine;
}
