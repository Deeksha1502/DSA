const Optimized = (arr, target) => {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    if (arr[i] + arr[j] === target) {
      return [i, j];
    } else if (arr[i] + arr[j] < target) {
      i++;
    } else {
      j--;
    }
  }
  return -1;
};
console.log(Optimized([2, 6, 5, 8, 11], 14));
