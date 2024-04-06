const Duplicates = (str) => {
  let ans = str[0];
  let i = 0;
  for (let j = i + 1; j < str.length; j++) {
    if (str[j] != str[i]) ans += str[j];
    i++;
  }
  return ans;
};
console.log(Duplicates("aaaAAbbcccbd"));
console.log(Duplicates("xxxyyyzwwzzz"));
