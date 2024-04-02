const LongestConsecutiveSequence = (arr) => {
  const set = new Set(arr);
  let longest = 0;

  for (let i = 0; i < arr.length; i++) {
    //we need to check if arr[i]-1 elem is there/not there
    if (!set.has(arr[i] - 1)) {
      let count = 1;
      let j = arr[i];
      while (set.has(j + 1)) {
        j++;
        count++;
      }
      longest = Math.max(longest, count);
    }
  }
  return longest;
};
console.log(LongestConsecutiveSequence([100, 200, 1, 3, 2, 4]));
console.log(
  LongestConsecutiveSequence([1000, 25, 26, 27, 28, 9, 10, 11, 12, 13, 14])
);
console.log(LongestConsecutiveSequence([25, 26, 28]));
