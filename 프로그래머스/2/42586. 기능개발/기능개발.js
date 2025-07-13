function solution(progresses, speeds) {
  const answer = [];
  let [currentDay, count] = [0, 0]; 
    
    for (let i = 0; i < progresses.length; i++) {
        const remain = 100 - progresses[i];
        const day = Math.ceil(remain / speeds[i]);
        
        if (day <= currentDay) {
          count++;
        } else {
          if (count > 0) answer.push(count);
          currentDay = day;
          count = 1;
        }
    }

  answer.push(count);
  return answer;
}