const LeadersInArray = (arr) => {
  let n = arr.length;
  let newArray = [];
  let maxElement = arr[n - 1];
  newArray.push(arr[n - 1]);

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > maxElement) {
      newArray.push(arr[i]);
      maxElement = arr[i];
      console.log(newArray);
      console.log(maxElement);
    }
  }
  return newArray;
};

console.log(LeadersInArray([4, 7, 1, 0]));
