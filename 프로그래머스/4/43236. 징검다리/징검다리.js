function solution(distance, rocks, n) {
    rocks.sort((a, b) => a - b);
    rocks.push(distance);

    let left = 1;
    let right = distance;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let prev = 0
        let removed = 0;

        for (const rock of rocks) {
            if (rock - prev < mid) removed++;
            else prev = rock;
        }

        if (removed > n) right = mid - 1;
        else left = mid + 1;
    }

    return right;
}
