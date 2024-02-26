const solution = (spell, dic) => {
    const cntArr = dic.map(e => spell.filter(v => e.includes(v)).length).sort();
    
    return cntArr[cntArr.length - 1] === spell.length ? 1 : 2;
}