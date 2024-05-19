let x = 20;

function foo() {
  console.log(x);
  var x = 10;
  console.log(x);
}

foo();
