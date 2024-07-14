const CapitalizeFirstLetter = (str) => {
  let letter = str.charAt(0).toUpperCase();
  let answer = letter + str.substring(1);
  return answer;
};
console.log(CapitalizeFirstLetter('piano hello'));
