// ?======================================================
// ?                     STRING METOTLARI
// ! KAYNAK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ?======================================================

console.log("*** STRING METHODS ***");

//!1- Klasik yöntem (String Literals) ile string tanimlanirsa bu string
//! bir primitive degiskendir.
let str1 = "Clarusway";
//Char => C, l, a,....
const str2 = " Hello";
const str3 = " Full Stack";

console.log(str1, typeof str1);

//!2 - Non-primitive String tanımlama
const str4 = new String("Non-Primitive");
console.log(typeof str4);
//! js threats primitive values as objects when executing methods and properties

//?----------------------------------------
console.log(str1.toLowerCase());

//* Normalde primitive veri tiplerinin property veya metodu olmaz.
//* Ancak,Javascript otomatik olarak primitive String'ler için object wrapper oluşturur.
//* Bu sayede, String nesnelerine ait olan fonksiyonlar veya özellikleri
//* primitive string'ler ile kullanılabilir hale gelir.
//* Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.

//? Ek Açıklama için : https://javascript.info/primitives-methods

const sayi = 5;
const str5 = str1 + str2 + str3 + sayi; // Concatination
console.log(str5, typeof str5);

//* ---------------------------------------------------
//*  concat() - immutable
//* ---------------------------------------------------

//? Assigning ile immutablelar değiştirilebilir

console.log(str1.concat(str2));
console.log(str1, str2);
str1 = str1.concat(str3, "Path");
console.log(str1);

//* ---------------------------------------------------
//*  toUpperCase(), toLowerCase()
//* ---------------------------------------------------

const myName = "Hamza Ayğan";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

let yourName = "ismet";
// yourName = yourName.toUpperCase();
// yourName = yourName.toLocaleUpperCase(); //! Sistem diline göre işlem yapar
yourName = yourName.toLocaleUpperCase("tr");
console.log(yourName);

//? Örnek
/*
const isEqual = (str1, str2) => {
  return str1.toLocaleUpperCase() == str2.toLocaleUpperCase()
    ? `${str1} and ${str2} is equal`
    : `${str1} and ${str2} is not equal`;
};
*/

const isEqual = (str1, str2) =>
  str1.toLocaleUpperCase() == str2.toLocaleUpperCase()
    ? `${str1} and ${str2} is equal`
    : `${str1} and ${str2} is not equal`;

console.log(isEqual("Merhaba", "MERHABA"));
console.log(isEqual("Hello", "HELL"));

//* ---------------------------------------------------
//*  localeCompare()
//* ---------------------------------------------------

const a = "réservé"; // with accents, lowercase
const b = "RESERVE"; // no accents, uppercase

console.log(a.localeCompare(b));
// expected output: 1
console.log(a.localeCompare(b, "en", { sensitivity: "base" }));
// expected output: 0

//? 'BASE: a ≠ b, a = á, a = A'
//? 'ACCENT: a ≠ b, a ≠ á, a = A'
//? 'CASE: a ≠ b, a = á, a ≠ A'

//* ----------------------------------------------------------
//* charAt()
//* ----------------------------------------------------------
const str6 = "Full Stack Path and DS path";
console.log(str6.charAt(5)); //* S
console.log(str6.charAt(4)); //* " "
console.log(str6.charAt()); //* F (ilk indistekini dondurur)
console.log(str6.charAt(14)); //* h

//! lenght bir property (objenin degiskenidir) dir ve string'in
//! karakter sayisini tutar.
console.log(str6.length); //* 27

//* String son harfini ogrenmek istersek
console.log(str6.charAt(str6.length - 1)); //* 0 -26 => 27 eleman

//* ----------------------------------------------------------
//* includes() - case sentive
//* ----------------------------------------------------------

const word = "To be or not to be, that is the question";

console.log(word.includes("to be")); //? true
console.log(word.includes("That")); //? false
console.log(word.includes("")); //? true (null karakter)
console.log(word.includes("to be", 14)); //? false
console.log(word.includes("to be", 13)); //? true

//! NOT: case insentive kullanmak icin str baslangicta kucuk veya
//! buyuk harfe cevirilerek arama yapilabilir.

//* ----------------------------------------------------------
//* indexOf(), lastIndexOf() - case sentive
//* ----------------------------------------------------------

const toBe = word.indexOf("or");
console.log(toBe); //? 6
console.log(word);
console.log(str4);
/*
for (i in word) {
  console.log(i, word[i]);
}
*/

const abc = new String(word);
console.log(abc);

console.log(word.indexOf("be")); //?3
console.log(word.lastIndexOf("be")); //?16
console.log(word.lastIndexOf("BE")); //?-1

//* ----------------------------------------------------------
//* search()
//* ----------------------------------------------------------

//! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
//! https://www3.ntu.edu.sg/home/ehchua/programming/howto/Regexe.html

const buyukHarf = /[A-Z]/;
const nokta = /[.]/;
const virgul = /[,]/;
console.log(word.search(buyukHarf)); //? ilk buyuk harfin indeksi 0
console.log(word.search(virgul)); //?  18
console.log(word.search(nokta)); //? -1

//* ----------------------------------------------------------
//* startsWidth() , endsWith() - case sensitive
//* ----------------------------------------------------------

let word2 = "Sen gulunce guller acar gul pembe!";

console.log(new String(word2));
console.log(word2.startsWith("Sen")); //? true
console.log(word2.startsWith("gulunce")); //? false
console.log(word2.startsWith("gulunce", 4)); //? true
console.log(word2.endsWith("!")); //? true
console.log(word2.endsWith("r", 23)); //? true

//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith) --immutable
//* ----------------------------------------------------------
let oku = "Oku Baban gibi, saf olma, saf olma";
// console.log(oku.replace("saf olma", "basarili ol"));
oku = oku.replace("saf olma", "basarili ol");
// oku = oku.replace(/saf olma/gi, "basarili ol");
console.log(oku);

oku = oku.replace(/BASARILI/gi, "Zengin");
console.log(oku);

//! NOT: replace metodu eger Regex ile aksi belirtilmiyorsa (g) sadece ilk buldugunu degistirir.

//* ----------------------------------------------------------
//*  replaceAll() --immutable
//* ----------------------------------------------------------
let degistir = "daglar daglar yol ver gecem..";
degistir = degistir.replaceAll("daglar", "Dağlar");
console.log(degistir);

//?Regex de kullanilabilir.
let degistir2 =
  "No woman, no cry" +
  " No woman, no cry, eh, yeah" +
  " Little darling, don't shed no tears" +
  " No woman, no cry, eh";

console.log(degistir2.replaceAll(/no/gi, "Hayir"));

//* ----------------------------------------------------------
//*  slice(beginIndex[, endIndex])
//*  substring(beginIndex[, endIndex])
//*  substr (depreceated)
//* ----------------------------------------------------------

const veysel = "Uzun ince bir yoldayim yuruyorum gunduz gece..";

const sliced = veysel.slice(33);
console.log(sliced, typeof sliced); //? gunduz gece..

console.log(veysel.slice(17, 30)); //? dayim yuruyor
console.log(veysel.slice(-10)); //? slice içinde negatif index kullanılabilir
console.log(veysel.slice(-23, -19));

console.log(veysel.substring(17, 30)); //? dayim yuruyor
console.log(veysel.substring(-10)); //? substring de negatif index kullanılamaz

//* ----------------------------------------------------------
//* split([sep [, limit] ])
//* ----------------------------------------------------------

const tarkan = "Gel gunduzle gece olalim";
const splited = tarkan.split(" ");
console.log(splited, typeof splited); //! boşluklardan ayırarak ARRAY e çevirdi
console.log(tarkan.split(" ").join("-")); //! önce böler sonra birleştirir.join array methodu)

const chars = tarkan.split("");
console.log(chars); //! null karakterlere göre harfleri ayırarak bir char dizisi oluşturdu

//* ----------------------------------------------------------
//* trim();
//* ----------------------------------------------------------
const ramazan = "    Hoş geldin ya şehri Ramazan     ";
console.log(ramazan);
console.log(ramazan.length); // 36
console.log(ramazan.trim());
console.log(ramazan.trim().length); //27

//! ODEV1: tarkan string'indeki kelimelerin sayisini donduren
//! bir fonksiyon yaziniz.

//! ODEV2:
//! ----------------------------------------------------------
// https://www.youtube.com/watch?v=b7vfp5G4brE
// https://youtu.be/b7vfp5G4brE
