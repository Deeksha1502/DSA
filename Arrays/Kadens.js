const Kadens = (arr) => {
  let sum = 0;
  let maxSum = arr[0];
  let i = 0;

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }

  return maxSum;
};
console.log(Kadens([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
