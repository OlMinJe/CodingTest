const solution = (num_list) => {
    const evenArr = num_list.filter((e, i) => i % 2 === 0).reduce((acc, cur) => acc + cur);
    const oddArr = num_list.filter((e, i) => i % 2 !== 0).reduce((acc, cur) => acc + cur);
    
    return evenArr >= oddArr ? evenArr : oddArr;
}