const solution = (l, r) => {
    let arr = [];
    for (let i = l; i <= r; i++) {
        let str = i.toString();
        if ([...str].every((e) => e === '0' || e === '5')) {
            arr.push(i);
        }
    }
    return arr.length > 0 ? arr : [-1];
}
