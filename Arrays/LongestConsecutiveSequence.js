const LongestConsecutiveSequence = (arr) => {
  arr.sort();
  let maxCount = 0;
  let diff = 0;
  let i = 0;
  let j = i + 1;

  while (i < arr.length - 1 && j < arr.length - 1) {
    diff = arr[j] - arr[i];
    if (diff === 1) maxCount++;
    return maxCount;
  }

  return 0;
};
console.log(LongestConsecutiveSequence([100, 200, 1, 3, 2, 4]));
