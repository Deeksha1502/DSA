const RemoveParanthesis = (str) => {
  let BracketCount = 0;

  let newString = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      if (BracketCount) newString += str[i];
      BracketCount++;
      console.log("This is ( bracketCount", BracketCount);
      console.log("This is first if", newString);
    }
    if (str[i] === ")") {
      BracketCount--;
      console.log("This is ) bracketCount", BracketCount);
      if (BracketCount) newString += str[i];
      console.log("This is second if", newString);
    }
  }
  return newString;
};

console.log(RemoveParanthesis("(()())(())"));
