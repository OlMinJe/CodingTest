const solution = (a, b) => {
    let aFront = Number(a.toString() + b.toString());
    let bFront = Number(b.toString() + a.toString());
    return aFront >= bFront ? aFront : bFront;
};