const MajorityElement = (nums) => {
  let count = 0;
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      count++;
      if (count >= nums.length / 2) {
        return nums[i];
      }
    }
  }
  return -1;
};
console.log(MajorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(MajorityElement([4, 4, 2, 4, 3, 4, 4, 3, 2, 4]));
console.log(MajorityElement([4, 4, 2, 4, 3, 4, 4, 3, 3, 3, 3, 2, 4]));
