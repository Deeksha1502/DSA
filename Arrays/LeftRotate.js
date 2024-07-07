const LeftRotate = (arr) => {
  let temp = arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = temp;
  return arr;
};

console.log(LeftRotate([0, 1, 5, 6, 3, 4, 3, 2, 1]));
console.log(LeftRotate([9, 1, 5, 8, 1, 4, 3, 2, 1]));
console.log(LeftRotate([5, 3, 5, 6, 3, 4, 5, 2, 1]));
