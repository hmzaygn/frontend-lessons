// ?=========================================================
// ?                DIZILER (ARRAYS)
// ?=========================================================

console.log("***** ARRAYS ******");

//* Dizi Tanimlama
//* ---------------------------------------------------------

//! 1. Yöntem - Array Literal / Tercih edilen yöntem
const names = ["ahmet", "ismet", "can", "canan", "matthew"];
console.log(names);
console.log(typeof names);

const emptyArr = [];
console.log(emptyArr);

//! 2. Yöntem - Object Constructor

const languages = new Array("C++", "JavaScript", "Assembly", "Go", "Ruby");
console.log(languages);

const numbers = new Array(3, 2, 1);
console.log(numbers);

//! 10 elemanlı boş bir array oluşturuldu

const numbers1 = new Array(10);
console.log(numbers1);

//! 2. Yöntem - Array.of()

const datas = Array.of(1, 2, 3);
console.log(datas);

const data = Array.of("deneme");
console.log(data);

//* Diziden Veri Okuma-Yazma (indexleme)
//* ---------------------------------------------------------

//! Diziden veri okuma
console.log(languages[1]);
const go = languages[3];
console.log(go);

console.log(names[names.length - 1]);

//? at()
console.log(names.at(-1));

//! Diziye veri yazma

// const names = ["ahmet", "ismet", "can", "canan", "matthew"];
names[1] = "Elrond";
console.log(names);

//!Uncaught TypeError: Assignment to constant variable.
// names = ["Ali", "Veli"];

//? numbers dizisinin son elementinin değerini 1 arttırın
// numbers[numbers.length - 1] += 1;
numbers[numbers.length - 1]++;
console.log(numbers);

const ages = [22, 44, 55];
const persons = ["Ahmet", "Can", 2022, 2022 - 1990, true, ages];

console.log(persons);
//? persons içindeki ages dizisinde bulunan 55 i konsola yazdır
console.log(persons[persons.length - 1][ages.length - 1]);

//? persons içindeki ages dizisinde bulunan 44 ü bir arttır
persons[persons.length - 1][1]++;
console.log(persons[persons.length - 1][1]);

console.log(ages); //! orjinal dizi de değişti

//? ===========================================
//? Diziyi Değiştiren (MUTATOR) Metodlar
//?============================================

const cars = ["BMW", "Mercedes", "Fiat", "Anadol"];

//* pop() son elemanı siler
const deleted = cars.pop();
console.log(cars, deleted);

//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayısını döndürür

const n = cars.push("Citroen");
console.log(n, cars);

//* unshift() dizinin 0. indexine eleman ekler ve dizinin son eleman sayısını döndürür

const n1 = cars.unshift("Audi");
console.log(n1, cars);

//* shift() dizinin 0. index elemanını siler ve silinen elemanı döndürür

const n3 = cars.shift();
console.log(cars, n3);

//* splice()

//? 1. parametre eklenecek index numarası
//? 2. parametre 0 ise araya ekleme, 1 ise üzerine yazma
//? 3. parametre yeni eklenecek veri
cars.splice(1, 0, "Passat");
console.log(cars);

cars.splice(3, 1, "Honda", "Toyota");
console.log(cars);

//* reverse() diziyi ters çevirir

cars.reverse();
console.log(cars);

//* sort() ASCII ye göre sıralama yapar
//! alfabetik sıraladığı için sayılar için doğru sonuç vermez
const sayilar = [2, 3, 1, 22, 5, 111, 7, 6, 11];
sayilar.sort();
console.log(sayilar);

//* sort metodu diziyi iterasyona ugratir ve parametre olark aldigi arrow
//* fonksiyonunu dizinin her bir elemanina uygular. Bu sayede kucuk sayilar
//* ile buyuk sayilari yer degistirerek siralama islemini gerceklestirir.
sayilar.sort((a, b) => a - b);
console.log(sayilar);
sayilar.sort((a, b) => a - b);
console.log(sayilar);

sayilar.sort((a, b) => b - a);
console.log(sayilar);

const namesNew = ["ahmet", "ismet", "can", "canan", "matthew", "elrond"];
namesNew.sort();
console.log(namesNew);

//* fill()

const array1 = [1, 2, 3, 4];
array1.fill(0);
console.log(array1);

array1.fill(5, 2, 4); //* 2 ve 4 indexler arasını 5 yapar
console.log(array1);

array1.fill(10, 1); //* 1 index sonrasının tamamını 10 yapar
console.log(array1);

//? ===========================================================
//?  DIZI ERISIM METOTLARI
//? ===========================================================
const sayilar1 = [3, 5, 2, "2", "üc", 2, "3", "bes", "5"];

//* includes()
//*-----------------------------------------------------------

console.log(sayilar1.includes(5)); //?true
console.log(sayilar1.includes("5")); //?false

//* indexOf(),  lastIndexOf();
//*-----------------------------------------------------------
//* ilk eslesen indeksi dondurur.

console.log(sayilar1.indexOf(2)); //? 2
console.log(sayilar1.lastIndexOf(2)); //? 5

//! Odev: prompt ile konsoldan bir sayi istenmeli (string veya number
//! olarak) eger bu girilen sayi, dizi icerisinde bulunuyorsa indisi
//! (string ve number olarak ayri) yazdirilmalidir. Eger bulunamadiysa
//! Aranilan bulunamamistir yazidirilmalidir.
//!-----------------------------------------------------------

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.
console.log(sayilar1.join("-"));
console.log(sayilar1.join()); //? default olarak "," kullanır
console.log(sayilar1);

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.
console.log(sayilar1.toString());

//* slice()
//*-----------------------------------------------------------

const cars1 = ["BMW", "Mercedes", "Fiat", "Anadol"];

const newCars = cars1.slice(2);
console.log(newCars);
const newCars1 = cars1.slice(1, 3); //? start inclusive, end exlusive
console.log(newCars1);

//* concat()
//*-----------------------------------------------------------
const yazilar = ["Bugün", "hava", "çok", "güzel"];
const numArr = [1, 2, 3, 4];
const combinedArr = yazilar.concat(true, numArr, [
  "aslinda",
  "cok",
  "sicak",
  ["x", "y"],
]);
console.log(combinedArr);

//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const ageArr = [18, 22, 34, 78, 81, 15];
const check = ageArr.every((yas) => yas >= 18);
console.log(check);

check
  ? console.log("Herkes 18 den büyük")
  : console.log("Dizide 18 yaş altı var");

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

const buyuk80 = ageArr.some((yas) => yas >= 80);
console.log(buyuk80);

//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//? ORNEK : yaşı 30 dan büyük olan ilk eleman?

const ageFirst30 = ageArr.find((yas) => yas >= 30);
const ageLast30 = ageArr.findLast((yas) => yas >= 30);
console.log(ageFirst30, ageLast30);

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//? ORNEK : yaşı 30 dan büyük olan ilk index?

const foundIndex = ageArr.findIndex((yas) => yas >= 30);
console.log(foundIndex);
