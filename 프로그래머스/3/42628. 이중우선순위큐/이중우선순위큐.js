class Heap {
  constructor(compare) {
    this.data = [];
    this.compare = compare;
  }

  push(val) {
    this.data.push(val);
    this._heapifyUp();
  }

  pop() {
    if (this.size() === 0) return null;
    const top = this.peek();
    const last = this.data.pop();
    if (this.size() !== 0) {
      this.data[0] = last;
      this._heapifyDown();
    }
    return top;
  }

  peek() {
    return this.data[0];
  }

  size() {
    return this.data.length;
  }

  _heapifyUp() {
    let idx = this.data.length - 1;
    const current = this.data[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.data[parentIdx];
      if (this.compare(current, parent) >= 0) break;
      this.data[idx] = parent;
      idx = parentIdx;
    }
    this.data[idx] = current;
  }

  _heapifyDown() {
    let idx = 0;
    const current = this.data[idx];
    const length = this.data.length;

    while (idx * 2 + 1 < length) {
      let leftIdx = idx * 2 + 1;
      let rightIdx = idx * 2 + 2;
      let smallestIdx = leftIdx;

      if (rightIdx < length && this.compare(this.data[rightIdx], this.data[leftIdx]) < 0) {
        smallestIdx = rightIdx;
      }

      if (this.compare(this.data[smallestIdx], current) >= 0) break;

      this.data[idx] = this.data[smallestIdx];
      idx = smallestIdx;
    }

    this.data[idx] = current;
  }
}

function solution(operations) {
  const minHeap = new Heap((a, b) => a - b); // 최소 힙
  const maxHeap = new Heap((a, b) => b - a); // 최대 힙
  const visited = new Map(); // 삽입된 숫자의 개수 저장

  for (let op of operations) {
    const [command, valueStr] = op.split(" ");
    const value = Number(valueStr);

    if (command === "I") {
      // 삽입: 두 힙에 넣고 카운팅
      minHeap.push(value);
      maxHeap.push(value);
      visited.set(value, (visited.get(value) || 0) + 1);
    } else if (command === "D") {
      const heap = value === 1 ? maxHeap : minHeap;

      // 유효한 값만 제거
      while (heap.size()) {
        const target = heap.pop();
        if (visited.get(target)) {
          visited.set(target, visited.get(target) - 1);
          break;
        }
      }
    }
  }

  // 마지막 정리: 유효하지 않은 값 제거
  const validMax = () => {
    while (maxHeap.size()) {
      const val = maxHeap.peek();
      if (visited.get(val)) return val;
      else maxHeap.pop();
    }
    return null;
  };

  const validMin = () => {
    while (minHeap.size()) {
      const val = minHeap.peek();
      if (visited.get(val)) return val;
      else minHeap.pop();
    }
    return null;
  };

  const max = validMax();
  const min = validMin();

  return max === null ? [0, 0] : [max, min];
}
