const Alphabetical = (str) => {
  let ans = str.split("").sort().join("");
  return ans;
};

console.log(Alphabetical('apple'));
