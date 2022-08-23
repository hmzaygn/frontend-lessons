// ? ================================================
// ?                FONKSİYONLAR
// ?=================================================

//!--------------------------------------------------
//! 2.YONTEM  : FUNCTION EXPRESSION
//!--------------------------------------------------

console.log("******** 2- EXPRESSION*******");

//* ORNEK:
//***************************************************/

//! Cannot access before initialization
// console.log(oddEven(4));

//! Function expression ile tanımlama
const oddEven = function (number) {
  return number % 2 ? `${number} is odd` : `${number} is even`;
};

console.log(oddEven(5));

//* ORNEK: 3 sayinin en büyüğünü bulan fonks.
//******************************************************/

const findBigger = function (n1, n2, n3 = -Number.MAX_VALUE) {
  let biggest;
  if (n1 >= n2 && n1 >= n3) {
    biggest = n1;
  } else if (n2 >= n1 && n2 >= n3) {
    biggest = n2;
  } else if (n3 >= n1 && n3 >= n2) {
    biggest = n3;
  }
  return biggest;
};
/*
const n1 = +prompt("Number1:");
const n2 = +prompt("Number2:");
const n3 = +prompt("Number3:");

console.log(`The biggest number you entered is ${findBigger(n1, n2, n3)}`);
*/
console.log(`The biggest number you entered is ${findBigger(-9, -5, -1)}`);
console.log(`The biggest number you entered is ${findBigger(-9, -5)}`);
