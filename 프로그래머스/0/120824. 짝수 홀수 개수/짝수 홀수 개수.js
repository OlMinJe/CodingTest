const solution = (num_list) => {
    const evenArr = num_list.filter((e) => e % 2 === 0).length;
    return [evenArr, num_list.length - evenArr];
}