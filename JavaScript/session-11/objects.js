//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bölgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********");

//! 3 farklı yöntem ile Object oluşturulabilir
//*---------------------------------------------------
//* 1- Object() class ından new operatörü ile
//*---------------------------------------------------

const arabalar = new Object();
arabalar.marka = "BMW";
arabalar.motor = "1,3";
arabalar.model = 2022;
arabalar.lpg = true;
console.log(arabalar);

//!Read
console.log(arabalar.lpg); //? .notation
console.log("MODEL:", arabalar["model"]); //? Square bracket notation

//? Square bracket yonteminin en buyuk avantaji key degerini
//? degisken olarak kullanabilmemizdir.
const key = "marka";
console.log(arabalar[key]);

//! Keylerin value ları değiştirilebilir
arabalar.motor = "1.6";
console.log(arabalar);

//* ---------------------------------------------------------
//* 2- object constructor'i kullanarak (OOP ile ayrintilandirilacak)
//* ---------------------------------------------------------

//? Object Constructure
function Personel(id, ad, maas) {
  this.id = id;
  this.ad = ad;
  this.maas = maas;
}

const kisi1 = new Personel("12346578911", "Mustafa", 15000);
console.log(kisi1);
const kisi2 = new Personel("88349998911", "Canan", 25000);
console.log(kisi2);

console.log(kisi1.ad);
console.log(kisi2.maas);
console.log(kisi2["id"]);

//? this global alanda window objesini gösterir
console.log(this);

//* ---------------------------------------------------------
//* 3- Object Literal (En çok kullanılan yöntem)
//* ---------------------------------------------------------

const worker = {
  name: "Can",
  surmane: "Canan",
  age: 33,
  job: "developer",
  languages: ["C++", "Java", "JS", "Python", "Go"],
  salary: 140000,
};

console.log(worker);
console.log("JOB :", worker.job);
console.log("Lang :", worker["languages"]);
worker["languages"].forEach((l) => console.log(l));
console.log("JavaScripts :", worker["languages"][2]);
worker.birthDay = 1990;
worker.email = "can@gmail.com";
console.log(worker);

// worker["salary"] = worker["salary"] * 1.1;
worker["salary"] *= 1.1;
console.log(worker);

//* Object Copy

//! Shallow (Sığ) Copying
//? create(), assign(), spread(...), concat(), slice() -> Shallow Copy
const person = worker;
console.log("PERSON :", person);

person.birthDay = "2000";
console.log("PERSON :", person);
console.log("WORKER :", worker);

//! Deep Copy
let deepCopyOfWorker = JSON.parse(JSON.stringify(worker));
console.log(JSON.stringify(worker)); //! Herşeyi stringe çevirir
console.log(JSON.parse(JSON.stringify(worker))); //! Herşeyi tekrar objeye çevirir

deepCopyOfWorker.birthDay = 2022;
console.log("DEEP:", deepCopyOfWorker);

console.clear();

//* ===================================================
//*                 OBJECT METODLARI
//* ===================================================

const personal = {
  name: "Canan",
  surmane: "Çavan",
  dob: "1990",
  job: "developer",
  languages: ["C++", "Java", "JS", "Python", "Go"],
  salary: 153000,
  drivingLicence: true,
  calculateAge: function () {
    return new Date().getFullYear() - this.dob;
  },
  //   summary: () => {
  //     console.log(this); //? window (global obje)
  //     return `${this.name} is ${this.calculateAge()} years old`;
  //     //! arrow functa this kullanılmaz
  //     //! Arrow function ların kendilerine ait scope u yoktur. (lexical scope)
  //   },
};

console.log("Age :", personal.calculateAge());
// console.log("Summary :", personal.summary());

//! NOT: arrow fonksiyonlari ozellikle callback fonksiyonu olarak
//! kullanilmak ve bu fonksiyonlarda this keyword kullanim
//! gereksinimini kaldirmak icin gelistirilmistir.
//! Lexical context'e sahiptirler.Dolayisiyla, bir obje fonksiyonu
//! olarak kullanilirsa, this kelimesi global scope'u (window nesnesini)
//! gösterir. Bunu engellemek için object fonksiyonlarini tanimlarken
//! diger (func. expression veya declaration) yontemlerini kullanabilir.

//! Limitations of using Arrow functions: Following are the certain limitations of using an arrow function:
//! An arrow function doesn’t have its own bindings with this or super.
//! An Arrow function should not be used as methods.
//! An arrow function can not be used as constructors.
//! An arrow function can not use yield within its body.
//! Arrow function cannot be suitable for call apply and bind methods.

// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================

//? nested
const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "QA",
    salary: "90000",
    drivingLicense: true,
  },
};

console.log(people);

console.log("Salary of P2 :", people.person2.salary);

//? Javascript'de Objeler default olarak iterable degildir.
//? Ama for in ve for of donguleri ile itere edilebilirler.

//! Iterable is an object which can be looped over or iterated over with the help of a for loop.
//! Objects like lists, tuples, sets, dictionaries, strings, etc. are called iterables. In shor
//! and simpler terms, iterable is anything that you can loop over.

//! FOR - IN
console.log("*****FOR-IN*****");
//* for (key in object) {
//*   // code block to be executed
//* }

for (let person in people) {
  console.log(person);
  console.log(people[person]);
}

//! FOR - OFF
console.log("*****FOR-OFF*****");
//* for (x of iterable) {
//*     code block to be executed
//* }

//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.

console.log(Object.keys(people));
console.log(Object.values(people));
console.log(Object.entries(people));

console.log("*************");
for (let key of Object.keys(people)) {
  console.log(key);
}

console.log("*************");
for (let value of Object.values(people)) {
  console.log(value);
}
//? people objesindeki tüm maaşları yazdır
for (let value of Object.values(people)) {
  //   console.log(value.salary);
  console.log(value["salary"]);
}

console.log("*************");
for (let [key, value] of Object.entries(people)) {
  console.log([key, value]);
}

//? people objesindeki tüm maaşları yazdır
for (let [key, value] of Object.entries(people)) {
  console.log(`${key} - ${value.salary}`);
}
