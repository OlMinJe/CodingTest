class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const current = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (parent <= current) break;

      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  extractMin() {
    if (this.heap.length === 0) return null;

    const min = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown();
    }

    return min;
  }

  sinkDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftIdx = 2 * index + 1;
      let rightIdx = 2 * index + 2;
      let swap = null;

      if (leftIdx < length && this.heap[leftIdx] < element) {
        swap = leftIdx;
      }

      if (
        rightIdx < length &&
        ((swap === null && this.heap[rightIdx] < element) ||
          (swap !== null && this.heap[rightIdx] < this.heap[leftIdx]))
      ) {
        swap = rightIdx;
      }

      if (swap === null) break;

      [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
      index = swap;
    }
  }
}


function solution(scoville, K) {
  const heap = new MinHeap();
  for (const s of scoville) {
    heap.insert(s); 
  }

  let count = 0;
  while (heap.heap[0] < K) {
    if (heap.heap.length < 2) return -1;

    const first = heap.extractMin();
    const second = heap.extractMin();
    const mixed = first + (second * 2);

    heap.insert(mixed);
    count++;
  }

  return count;
}

