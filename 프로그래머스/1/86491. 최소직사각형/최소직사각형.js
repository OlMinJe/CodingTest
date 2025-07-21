function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    
    for (let [w, h] of sizes) {
        const [big, small] = w > h ? [w, h] : [h, w]
        
        maxWidth = Math.max(maxWidth, big);
        maxHeight = Math.max(maxHeight, small)
    }
    
    return maxWidth * maxHeight;
}