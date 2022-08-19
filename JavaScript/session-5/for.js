// * ============================================
// *            DONGULER(LOOPS)- FOR
// * ============================================

console.log("****** FOR *******");

//? Örnek : 1 den n e kadar olan sayıları toplayan for döngüsü

const n = 5; /* +prompt("Bir sayı giriniz :"); */
let toplam = 0;
for (let i = 1; i <= n; i++) {
  toplam += i;
}
console.log("Sonuç =", toplam);

//? Örnek : 0-20 arası 10 tane random sayı üreten döngü yaz

//* NOT:
//* Math.floor() =>surekli asagiya yuvarlar
//* Math.ceil() =>sürekli yukariya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

for (i = 1; i <= 10; i++) {
  const randomm = Math.round(Math.random() * 20);
  console.log(randomm);
}

//? ÖRNEK: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.

/*
let prime = Number(prompt("Enter a number :"));
let counter = 0;
for (let i = prime-1; i >= 2; i--) {
  if (prime % i == 0) {
    counter++;
  }
}

console.log(prime);
counter > 0? console.log("Not prime") : console.log("Prime");
*/

/*
const number = Number(prompt("Enter a positive number :"));
let prime = true;

if (number <= 0) {
  alert("The number must be bigger than 0");
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      prime = false;
      break;
    }
  }
}
const resolve = prime === true ? "Prime" : "Not Prime"
console.log(`${number} is`, resolve)
*/
