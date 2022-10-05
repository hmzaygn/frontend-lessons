//* ======================================================
//*        OOP - Static and Private  (ES6)
//* ======================================================

//? Static degiskenler ve metotlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//? Eger nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! Encapsulation OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve
//! izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation private degiskenler ve private metotlar yardimiyla yapilir.
//! ES6 ve sornasinda private degisken ve metotlari belirtmek icin
//! # (hash) kullanilir.

//! Private degiskenler dogrudan erisilemezler. Bunlara erismek icin class
//! icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar
//! kullanilir.

//! Private metotlara ise class disirasindan da eriselemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebilir.

class Book {
  //! static property tanımlaması
  static counter = 0;

  //? Private property
  #id;
  constructor(title, author, year) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.#id = 44;

    this.getTitle = function () {
      return this.title;
    };

    //* static değişkenin değerini değiştirdik
    Book.counter++; //! className.propertyName
  }

  //? Class içerisinde public metodlar yardımıyla private değişkenler okunabilir
  //?Bu tip metodlara getter metodlar denir
  //! getter metodlar class içinde tanımlanmalıdır
  getId() {
    return this.#id;
  }

  //? Class içerisinde public metodlar yardımıyla private değişkenler yazılabilir
  //?Bu tip metodlara setter metodlar denir
  //! setter metodlar class içinde tanımlanmalıdır
  setId(id) {
    this.#id = id;
  }

  getSummary() {
    return `${this.title} was writtten by ${
      this.author
    }, ${this.#computeAge()} years ago`;
  }

  //! private metod tanımlaması
  #computeAge() {
    return new Date().getFullYear() - this.year;
  }
}

const book1 = new Book("The Alchemist", "Paulo Coelho", 1988);
console.log(book1.title);

//? private bir değişkenin değeri class dışında doğrudan okunamaz
// console.log(book1.#id);
// book1.#id = "11111"; //? private bir değişkenin değeri class dışında doğrudan değiştirilemez

//? private değişkeni okuma
console.log(book1.getId());

//? private değişkene değer atama
book1.setId("00000");
console.log(book1.getId());

//! private metodlar class dışından erişilemezler
//! Ancak class içerisindeki bir metoddan erişilebilirler
// console.log(book1.#computeAge());

console.log(book1.getSummary());

const book2 = new Book("ABC", "Ali Veli", 1988);
const book3 = new Book("XYZ", "Deli Deli Küpeli", 1988);
const book4 = new Book("QWERTY", "Ahmet Mehmet", 1988);

//! static değişkenlere sadece class üzerinden erişilebilir
console.log(Book.counter);

//! instancelar üzerinden static değişkenlere erişilemez
console.log(book1.counter);
