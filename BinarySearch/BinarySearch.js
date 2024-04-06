const BinarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = (start + end) / 2;
    if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};
console.log(BinarySearch([1, 5, 6, 7, 8, 12, 15], 8));
