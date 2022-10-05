//* ======================================================
//*           OOP - Classes and Inheritance (ES6)
//* ======================================================

//? Classes'lar, object (nesne) olsuturmak icin kullanilan sablonlardir.
//? JS'de Class'lar prototipler uzerine insa edilmistir. Ancak, syntax
//? ES5'den farklidir. Aslinda, class keyword'u ilk olarak ES6 da
//? kullanilmistir ancak bu sadece bir syntactical sugar'dir.
//? JavaScript, class-tabanli bir dil degil, prototype-tabanli bir dildir.
//? yaygin kullanim class-tabanli oldugu icin syntax'ini O'na benzetmistir.

//? Bir parent class'in degisken ve fonksiyonelliği extends
//? keyword'u ile child class'a gecmektedir.(INHERITANCE)

class Book {
  constructor(title, author, year) {
    this.author = author;
    this.title = title;
    this.year = year;

    //? bu alanda yazılan bir metod tüm instance ların belleğinde tek tek yer kaplar
    this.getTitle = function () {
      return this.title;
    };
  }

  //! Bu kısımda yazılan fonsiyonlar aslında prototype alanda bulunur
  getAge() {
    return new Date().getFullYear() - this.year;
  }

  getSummary() {
    return `${this.title} was writtten by ${this.author} in ${this.year}`;
  }
}

//? instance
const book1 = new Book("Kasagi", "Omer Seyfettin", 1920);
console.log(book1);
console.log(book1.getAge());

//? Sub-Class TAnımlaması (Inheritance)

class Magazine extends Book {
  constructor(title, author, year, month) {
    //! Book un constructur ı çağırıldı yani prototypler otomatik olarak kopyalandı
    super(title, author, year);
    this.month = month;
  }
}

//? Magazine objesinin yeni bir instance'ı
const mag1 = new Magazine("Scientific Research", "Einstein", 1926, "September");
console.log(mag1);
console.log(mag1.getAge());
console.log(mag1.getSummary());
console.log(mag1.getTitle());
