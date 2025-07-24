function solution(n, lost, reserve) {
    const intersection = lost.filter(l => reserve.includes(l));
    const realLost = lost.filter(l => !intersection.includes(l)).sort((a, b) => a - b);
    const realReserve = reserve.filter(r => !intersection.includes(r)).sort((a, b) => a - b);

    for (let r of realReserve) {
        const prevIndex = realLost.indexOf(r - 1);
        if (prevIndex !== -1) {
            realLost.splice(prevIndex, 1);
            continue;
        }

        const nextIndex = realLost.indexOf(r + 1);
        if (nextIndex !== -1) realLost.splice(nextIndex, 1);
    }

    return n - realLost.length;
}
