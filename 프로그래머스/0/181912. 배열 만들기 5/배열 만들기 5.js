const solution = (intStrs, k, s, l) => intStrs.map(e => {
    const strArr = e.split('').map(el => [el]).slice(s, s + l).join('');
    return Number(strArr);
}).filter(e => e > k);