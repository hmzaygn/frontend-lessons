// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !------------------------------------------------

console.log("****** FUNC DECLARATION *********");

//* ORNEK:
//************************************************/
function yasYazdir(ad, tarih) {
  console.log(`Benim adım ${ad} ve ben ${2022 - tarih} yaşındayım`);
}

let isim = "Murat";
let dogTarih = 1990;

yasYazdir(isim, dogTarih);

//* ORNEK:
//************************************************/

function sayHi(name, surname = "") {
  console.log(`Hi ${name} ${surname}`);
}

sayHi("Feanor", "Finweson");
sayHi("Feanor");

//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki lastName
//! parametresi icin default değer olarak '' atanmistir.

//* ORNEK:
//************************************************/

function ageCal(name, birthDate) {
  //   const result = `${name} is ${2022 - birthDate} years old`;
  //   const result = `${name} is ${new Date().getFullYear() - birthDate} years old`;
  //   return result;
  return `${name} is ${new Date().getFullYear() - birthDate} years old`;
}

const message1 = ageCal("Elif Can", 2016);
console.log(message1);
console.log(ageCal("Veli Öztürk", 1980));

//* ORNEK:
//************************************************/

function evenOdd(number) {
  return number % 2 ? `${number} is Odd` : `${number} is Even`;
}

console.log(evenOdd(5));
console.log(evenOdd(2));

//* ORNEK:
//************************************************/
/*
console.log(evenOdd(+prompt("Enter a number :")));
*/
