const solution = (num_list, n) => {
    const resultArr = [];
    
    let i = 0
    while (i < num_list.length) {
        resultArr.push(num_list[i]);
        i += n;
    }
    
    return resultArr;
};