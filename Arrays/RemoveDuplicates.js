const RemoveDuplicates = (nums) => {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      nums[i + 1] = nums[j];
      i++;
    }
  }
  return nums;
};

console.log(RemoveDuplicates([1, 1, 2, 2, 2, 3, 3, 3, 3]));
console.log(RemoveDuplicates([1, 1, 2, 2, 2, 4, 4, 5, 5]));
console.log(RemoveDuplicates([0, 1, 2, 2, 2, 3, 3, 3, 3]));
