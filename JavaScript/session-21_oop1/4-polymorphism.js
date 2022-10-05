//* ======================================================
//*        OOP -  Polymorphism(ES6)
//* ======================================================

//* Polymorphism, bir degisken, fonksiyon veya nesnenin çoklu sekiller
//* alabilmesini tanimlayan bir nesne-yonelimli programlama teknigidir.
//* Polymorphism, genellikle Overloading ve Overriding gibi alt kavramlar
//* ile bilinir.

class Book {
  constructor(title, author, year) {
    this.author = author;
    this.title = title;
    this.year = year;

    this.getTitle = function () {
      return this.title;
    };
  }

  getAge() {
    return new Date().getFullYear() - this.year;
  }
  getSummary() {
    return `${this.title} was writtten by ${this.author} in ${this.year}`;
  }
}

//? Sub-Class TAnımlaması (Inheritance)

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }

  //! Overrided moted parent class daki bir metodun farklı fonksiyonellikle fakataynı isimle tanımlanması
  getSummary() {
    return `${this.title} was writtten by ${this.author} in ${this.month} of ${this.year}`;
  }
  //! override edilmiş bir parent fonksiyonu super keyword ü ile çağrılabilir
  getSummaryParent() {
    return super.getSummary();
  }
}

//? Magazine objesinin yeni bir instance'ı
const mag1 = new Magazine("Scientific Research", "Einstein", 1926, "September");
console.log(mag1);
console.log(mag1.getSummary());
console.log(mag1.getSummaryParent());
