const RemoveDuplicates = (str) => {
  let ans = str[0];

  for (i = 1; i < str.length; i++) {
    if (str[i] != str[i - 1]) {
      ans += str[i];
    }
  }
  return ans;
};
console.log(RemoveDuplicates("aaaAAbbcccbd"));

