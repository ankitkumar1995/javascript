/*
input a= 10, b=20
output a=20, b=10
*/
// swap two variable using third variable
const swapTwoVariableUsingThird = (a, b) => {
  let temp;
  temp = a;
  a = b;
  b = temp;
  return { a, b };
};
console.log(swapTwoVariableUsingThird(10, 20));
console.log("qq");
