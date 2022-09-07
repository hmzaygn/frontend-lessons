console.log("****** ITERATION **********");

//* ======================================================
//*                   FOREACH METHOD
//* ======================================================
console.log("****** FOREACH METHOD **********");

let students = ["John", "Ali", "Ahmet"];
students.forEach((k) => console.log(k));

//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.

const prices = [100, 250, 50, 89];

prices.forEach((p) => console.log(p));

//?-------------- ÖRNEK -------------------
//?  prices dizisindeki fiyatların toplamını konsola bastiriniz.

let sum = 0;
prices.forEach((price) => (sum += price));

console.log(`Sum = ${sum}`);

//! NOT: forEach metodu void metoddur. Herhangi bir değer döndürmez. Değişkene atanamaz.
console.log(prices.forEach((price) => (sum += price))); //! undefined

//?-------------- ÖRNEK -------------------
//? prices dizisindeki her bir ara toplam değerini konsola yazdır. Ayrıca her bir fiyata %10 zam yap

let total = 0;
prices.forEach((price, index, arr) => {
  total += price;
  console.log(`${index + 1}. iteration : ${total}`);
  arr[index] = Math.trunc(price * 1.1);
});

console.log(prices);

//* ======================================================
//*                       MAP METHOD
//* ======================================================
console.log("****** MAP METHOD **********");
/*
map(callbackfn: (value: number, index: number, array: number[]) => any, thisArg?: any): any[]

A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
Calls a defined callback function on each element of an array, and returns an array that contains the results.
*/

//?-------------- ÖRNEK -------------------
const rakamlar = [3, 6, 8, 2, 9, 4, 0];

const katAlinmis = rakamlar.map((x) => x * 5);
console.log(katAlinmis);

//?-------------- ÖRNEK -------------------
//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];

let capitalNames = names.map((name) => name.toLocaleUpperCase("TR"));
console.log(names);
console.log(capitalNames);
//! forEach in aksine map metodu return verir
console.log(names.map((name) => name.toLocaleUpperCase("TR")));

//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const euro = 18.23;
const dollar = 18.19;
const tlPrices = [100, 150, 100, 50, 80];

const euroPrices = tlPrices.map((tl) => Number((tl / euro).toPrecision(3)));
console.log(euroPrices);

const dollarPrices = tlPrices.map((tl) => Number((tl / dollar).toFixed(2)));
console.log(dollarPrices);

//?-------------- ÖRNEK -------------------
//? products dizisinin icerisindeki her urunu (Orjinal dizideki)
//? buyuk harf olarak degistirelim.

const products = [
  "Iphone12",
  "samsung-a10",
  "lenovo",
  "macbook pro",
  "mac air",
  "Galaxy tablet",
  "macbook",
  "Iphone-x",
  "mac air",
  "lenovo",
  "macbook pro",
  "samsung-S20",
];
//! Orjinal diziyi degistidik.
products.map((p, i, arr) => (arr[i] = p.toUpperCase()));
console.log(products);

//* ======================================================
//*                 FILTER METHOD
//* ======================================================
console.log("****** FILTER METHOD **********");

const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

//?-------------- ÖRNEK -------------------
//? Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim

const bigThan = salaries.filter((s) => s > 10000);
console.log(bigThan, salaries);

const range = salaries.filter((s) => s >= 6000 && s <= 10000);
console.log(range);

//* ======================================================
//*                CHAINING (PIPELINE)
//* ======================================================
console.log("****** CHAINING (PIPELINE) METHOD **********");
//?-------------- ÖRNEK -------------------
//? Maasi 9000'den az olanlara %10 zam yaparak bunları yeni diziye saklayalım

const lessThan9000Increase = salaries
  .filter((s) => s < 9000)
  .map((s) => Number(Math.trunc(s * 1.1)));
console.log(lessThan9000Increase);

salaries
  .filter((s) => s < 9000)
  .map((s) => Number(Math.trunc(s * 1.1)))
  .forEach((s) => console.log(s));

//* ======================================================
//*                 REDUCE METHOD
//* ======================================================
console.log("****** REDUCE METHOD **********");

// const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

const sumOfSalaries = salaries.reduce((acc, val) => acc + val);

console.log("SUM :", sumOfSalaries);

//? ÖRNEK: maaşi 9k dan az olanlara %10 zam yap ve zam yapılanların toplam ne kadar ödeme olacağını bul

const sumOfRaisedSal = salaries
  .filter((s) => s <= 9000)
  .map((s) => s * 1.1)
  .reduce((acc, s) => acc + s, 0);

console.log("Sum of Raised Salaries :", sumOfRaisedSal);
