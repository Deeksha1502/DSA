const LongestSubarray = (nums, target) => {
  let i = 0;
  let j = 0;
  let sum = nums[0];
  let length = 0;
  while (j < nums.length) {
    if (sum === target) {
      length = Math.max(length, j - i + 1);
    }
    if (sum <= target) {
      j++;
      if (j < nums.length) sum += nums[j];
    } else {
      i++;
      sum -= nums[i];
    }
  }
  return length
};
console.log(LongestSubarray([2, 3, 5, 1, 9], 10));
