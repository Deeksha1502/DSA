const UnionOfArrays = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let union = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      if (union[union.length - 1] !== arr1[i]) union.push(arr1[i]);
      i++;
    } else {
      if (union[union.length - 1] !== arr2[j]) union.push(arr2[j]);
      j++;
    }
  }

  return union;
};

console.log(UnionOfArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12]));
console.log(UnionOfArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12, 13, 14]));
