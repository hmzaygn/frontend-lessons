// * ===============================================
// *                  KARAR YAPILARI
// * ===============================================

//**************** IF-ELSE *******************

console.log("****** CONDITIONS *******");

/*
let x = +prompt(`Enter a distance`);
let speed = null;

if (x > 100){
    console.log(speed = 50);
}
else if (x > 50){
    console.log(speed = 25);
}
else if (x > 10){
    console.log(speed = 5);
}
else{
    console.log(speed = 0);
}
*/

//? ORNEK1: Console'dan girilen bir sayisinin pozitif,negatif
//? yada 0 oldugunu tespit ederek yazdiriniz.
/*
const num = +prompt(`Enter a number :`)

if( num > 0) {
    console.log(`${num} is a positive number`);
}
else if(num < 0) {
    console.log(`${num} is a negative number`)
}
else {
    console.log(`Equal to ${num}`)
}

console.log(num, typeof num)
*/
//? ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu
//? yazdiriniz.

// const num1 = +prompt(`Enter a number :`);
// const num2 = +prompt(`Enter a number :`);
// const num3 = +prompt(`Enter a number :`);

//* 1. Yöntem
// if (num1 >= num2 && num1 >= num3) {
//   console.log(`${num1} is the biggest number`);
// } else if (num2 >= num3 && num2 >= num1) {
//   console.log(`${num2} is the biggest number`);
// } else {
//   console.log(`${num3} is the biggest number`);
// }

//* 2. Yöntem
// let biggest = num1;
// if (num2 >= biggest) {
//   biggest = num2;
// }
// if (num3 >= biggest) {
//   biggest = num3;
// }

// console.log(biggest);

//? ÖDEV1: Kullanıcıdan 2 sayı ve işlem operatörü alıp basit hesap makinesi yapınız.
/*
const num1 = +prompt(`Enter a number :`);
const num2 = +prompt(`Enter a number :`);
const operator = prompt(`Enter an operator :`);

if (operator === "+") {
  console.log(num1 + num2);
} else if (operator === "-") {
  console.log(num1 - num2);
} else if (operator === "*") {
  console.log(num1 * num2);
} else if (operator === "/") {
  console.log(num1 / num2);
}
*/
//********************SWITCH CASE************************/
console.log("****** SWITCH CASE *******");
//! SWITCH CASE yapısı bütün koşulları tek bir sayfada görmek için kullanılır
/*
let gun = +prompt("1-7 arası gün giriniz :")

switch(gun) {
    case 1:
        gun = "pazartesi"
        break
    case 2:
        gun = "salı"
        break
    case 3:
        gun = "çarşamba"
        break
    case 4:
        gun = "perşembe"
    break
    case 5:
        gun = "cuma"
        break
    case 6:
        gun = "cumartesi"
        break
    case 7:
        gun = "pazar"
        break
    default:
        console.log(`Günler 1 ile 7 arasında olmalı!!!`)
}
console.log(gun)
*/

//********************TERNARY************************/
console.log("****** TERNARY *******");

//? ÖRNEK
/*
const not = +prompt("Notunuzu Giriniz :")
// let sonuc = not >= 50 ? "Geçti" : "Kaldı"
// console.log(sonuc)
console.log(not >= 50 ? "Geçti" : "Kaldı")
*/
//? ODEV2 :Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.
/*
let day = prompt(`Enter the day :`).toLowerCase();

switch (day) {
  case "pazartesi":
    console.log(`InClass`);
    break;
  case "salı":
    console.log(`InClass`);
    break;
  case "çarşamba":
    console.log(`InClass`);
    break;
  case "perşembe":
    console.log(`InClass`);
    break;
  case "cuma":
    console.log(`TeamWork`);
    break;
  case "cumartesi":
    console.log(`InClass + Workshop`);
    break;
  case "pazar":
    console.log(`Self-Study`);
    break;
  default:
    console.log(`You have entered wrong input`);
}
*/
//? ÖDEV3: Maaş asgari ücretten az olanlara %50 zam,
//? fazla olanlara ise %10 zam yapılacak(turnary olacak)
/*
var wage = +prompt(`Please enter your wage :`);
var wage = (wage <= 6471 ? (wage * 1.5) : (wage * 1.1));
console.log(wage);
*/
//? ODEV4: Kredi Risk Programı

const wage = +prompt(`Please enter your wage :`);
const expenses = +prompt(`Please enter your expenses :`);

if(wage - expenses >= 6471) {
    console.log(`You can take a loan`)
}else{
    console.log(`You can't take loan`)
}