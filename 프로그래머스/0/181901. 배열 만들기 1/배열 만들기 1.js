const solution = (n, k) => Array.from({length: Math.floor(n/k)}, (_, i) => (i+1)*k);
