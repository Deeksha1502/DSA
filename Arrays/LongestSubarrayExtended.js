const LongestSubarrayExtended = (arr, k) => {
  let i = 0;
  let j = 0;
  let sum = arr[0];
  let length = 0;
  while (j < arr.length) {
    if (sum === k) {
      length = Math.max(sum, j - i + 1);
    }

    if (sum <= k) {
      j++;
      if (j < arr.length) sum += arr[j];
    } else {
      i++;
      sum -= arr[i];
    }
  }
};

console.log(LongestSubarrayExtended([-1, 1, 1], 1));
