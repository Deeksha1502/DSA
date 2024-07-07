const LongestWord = (str) => {
  const res = str.split(' ');
  const ans = [];
  //console.log(res);
  for (let i = 0; i < res.length; i++) {
    ans.push(res[i].length);
  }
  let maxLen = 0;
  let index;
  for (let i = 0; i < ans.length; i++) {
    if (ans[i] > maxLen) {
      maxLen = ans[i];
      index = i;
    }
  }
  return res[index];
};
const res = LongestWord('hello thereeeee how art thou?');
console.log(res);
