const RearrangeArrays = (arr) => {
  let PositiveNewArray = [];
  let NegativeNewArray = [];
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      PositiveNewArray.push(arr[i]);
    } else if (arr[i] < 0) {
      NegativeNewArray.push(arr[i]);
    }
  }
  for (let j = 0; j < PositiveNewArray.length; j++) {
    newArray.push(PositiveNewArray[j]);
    newArray.push(NegativeNewArray[j]);
  }
  return newArray;
};
console.log(RearrangeArrays([3, 1, -2, -5, 2, -4]));
