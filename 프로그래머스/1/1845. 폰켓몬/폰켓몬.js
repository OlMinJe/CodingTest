function solution(nums) {
  const max = nums.length / 2;
  const unique = new Set(nums).size;

  return Math.min(max, unique);
}
