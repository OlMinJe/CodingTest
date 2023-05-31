function solution(polynomial) {
    const cut = polynomial.split(' + ');
    let answer = '';
    let xNum = 0;
    let xNumbers = 0;
    let sum = 0;
    let total = 0;
    let totalNum = '';

    cut.map(e => e[0].includes('x') ? xNum += 1 : (e[0].includes('-') ? xNum -= 1 : 0));
    cut.map(e => {
        if (e.includes('x')) {
            const coefficient = Number(e.split('x')[0].replace('+', '').replace('-', ''));
            xNumbers += coefficient;
         }
    });

    if (xNum === null) xNum = 0;
    if (xNumbers === null) xNumbers = 0;

    total = xNum + xNumbers;
    for (let i = 0; i < cut.length; i++) {
        totalNum = total === -1 ? '-' : (total === 1 ? '' : total.toString());

        if (cut[i].indexOf('x') === -1) sum += Number(cut[i]);
        if (i === cut.length - 1) {
            answer = cut.findIndex(e => e.includes('x')) === -1
            ? sum.toString()
            : (sum !== 0 ? totalNum + 'x + ' + sum.toString() : totalNum + 'x');
        }
    }

    return answer;
}