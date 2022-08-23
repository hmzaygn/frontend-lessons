// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 3.YONTEM  : ARROW FUNCTION
// !------------------------------------------------

console.log("**** ARROW ******");

//* ORNEK: Silindirin hacmi
//************************************************/
/*
const r = +prompt("Enter Radius :");
const h = +prompt("Enter Height :");

const volume = (r, h) => Math.PI * r ** 2 * h;

// console.log(`${r}, ${h} => Volume is ${volume(r, h).toExponential()}`);
console.log(`${r}, ${h} => Volume is ${volume(r, h).toFixed(2)}`);
*/

//* ORNEK: Yaş Hesaplama
//************************************************/
/*
const birthDay = +prompt("Enter Your Birth Day :");

const ageCal = (year) => {
  let age = new Date().getFullYear() - year;
  return age;
};

console.log(`Your age is ${ageCal(birthDay)}`);
*/
//!Funct expression ve arrow func yontemlerinde
//! Once fonks tanimlanmalidir sonra cagrilmalidir.
//! Aksi takdirde hata alrsiniz.

//* ORNEK: Girilen n. terime kadar Fibonacci sayilarinin toplamini
//* hesaplayarak yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...

let stringResult = "1,1";
const fibo = (n) => {
  let fib1 = 1;
  let fib2 = 1;
  let summ = 0;

  for (let i = 2; i < n; i++) {
    summ = fib1 + fib2;
    fib1 = fib2;
    fib2 = summ;
    stringResult += "," + fib2;
  }
  return fib2;
};

const num = Number(prompt("Enter a number :"));
if (num <= 0) {
  console.log("Please enter a number bigger than 0");
} else {
  console.log(`FIBO(${num})= ${fibo(num)}`);
  console.log(stringResult);
}
