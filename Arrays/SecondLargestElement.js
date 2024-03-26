const SecondLargest = (myArray) => {
  let firstLargest = myArray[0];
  myArray.sort();

  let secondLargest;
  for (let i = 1; i < myArray.length; i++) {
    if (myArray[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = myArray[i];
    }
  }
  return secondLargest;
};
console.log(SecondLargest([1, 2, 4, 8, 7, 5]));
