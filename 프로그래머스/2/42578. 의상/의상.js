function solution(clothes) {
    const clothesMap = new Map();

    for (const [_, type] of clothes) {
        clothesMap.set(type, (clothesMap.get(type) || 0) + 1);
    }

    const answer = [...clothesMap.values()]
        .reduce((acc, count) => acc * (count + 1), 1);

    return answer - 1;
}
