function solution(spell, dic) {
    let arr = dic.filter(e => spell.every(i => e.includes(i)))
    return arr.length === 0 ? 2 : 1;
}