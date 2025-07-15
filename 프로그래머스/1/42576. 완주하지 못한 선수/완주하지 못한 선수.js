function solution(participant, completion) {
  const map = new Map();

  participant.forEach(name => map.set(name, (map.get(name) || 0) + 1));
  completion.forEach(name => map.set(name, map.get(name) - 1));

  for (const [name, count] of map.entries()) {
    if (count > 0) return name;
  }
}
