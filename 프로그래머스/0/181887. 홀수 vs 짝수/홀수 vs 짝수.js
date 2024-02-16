const solution = (num_list) => {
    const evenArr = num_list.reduce((acc, cur, i) => i % 2 === 0 ? acc : acc + cur, 0);
    const oddArr = num_list.reduce((acc, cur, i) => i % 2 === 0 ? acc + cur : acc, 0);
    
    return evenArr >= oddArr ? evenArr : oddArr;
}