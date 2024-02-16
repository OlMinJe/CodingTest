const solution = (arr) => {
    const startIdx = arr.indexOf(2);
    const endIdx = arr.lastIndexOf(2);
    
    if (startIdx === -1 && endIdx === -1) return [- 1];
    return arr.slice(startIdx, endIdx + 1);
} 