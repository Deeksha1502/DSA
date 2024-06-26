const SmallestLetterGreaterThanTarget = (arr, target) => {
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
  return arr[start % arr.length];
};

console.log(SmallestLetterGreaterThanTarget(["c", "f", "j"], "a"));

console.log(SmallestLetterGreaterThanTarget(["x", "x", "y", "y"], "z"));
