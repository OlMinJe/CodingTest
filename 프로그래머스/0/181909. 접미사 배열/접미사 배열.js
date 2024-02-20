const solution = (my_string) => {
    const strLen = my_string.length;
    const suffix = [...my_string].reduce((acc, cur, i) => {
        const customCur = my_string.slice(i, strLen);
        return [...acc, customCur];
    }, []);
    
    return suffix.sort();
}