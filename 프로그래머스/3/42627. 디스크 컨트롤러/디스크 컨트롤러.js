function solution(jobs) {
  jobs.sort((a, b) => a[0] - b[0]);

  const heap = [];
  let time = 0;
  let totalTime = 0;
  let idx = 0;
  const count = jobs.length;
    
  const insertHeap = (dur, req) => {
    heap.push([dur, req]);
    heap.sort((a, b) => a[0] - b[0]);
  };


  while (idx < count || heap.length > 0) {
    while (idx < count && jobs[idx][0] <= time) {
      const [req, dur] = jobs[idx++];
      insertHeap(dur, req);
    }

    if (heap.length > 0) {
      const [dur, req] = heap.shift();
      time += dur;
      totalTime += time - req;
    } else {
      // 작업 없으면 다음 요청까지 점프
      time = jobs[idx][0];
    }
  }

  return Math.floor(totalTime / count);
}
