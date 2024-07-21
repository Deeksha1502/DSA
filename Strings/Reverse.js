const Reverse = (str) => {
  let n = str.length;
  let newArr = [];
  for (let i = n - 1; i >= 0; i--) {
    newArr.push(str[i]);
  }
  return newArr;
};

console.log(Reverse('abcde'));
