const MoveZeros = (arr) => {
  const newArray = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newArray.push(arr[i]);
    }
    if (arr[i] === 0) {
      count++;
    }
  }
  for (let i = 0; i < count; i++) {
    newArray.push(0);
  }
  return newArray;
};

console.log(MoveZeros([1, 0, 2, 3, 0, 4, 0, 1]));
