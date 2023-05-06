function solution(order) {
    return order.toString()
        .split('')
        .filter(e => Number(e) % 3 === 0 && Number(e) != 0)
        .length;
}