const Ceil = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return start;
};
console.log(Ceil([1, 5, 6, 7, 8, 12, 15, 18, 19, 20], 4));

console.log(Ceil([1, 5, 6, 7, 8, 12, 15, 18, 19, 20], 13));
