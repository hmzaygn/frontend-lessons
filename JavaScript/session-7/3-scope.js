// ? ===================================================
// ?                FONKSİYONLAR-SCOPE
// ? ====================================================
console.log("******* 3 - SCOPE ********");

let num = 5; //! Global Scope dak' değişkeni herhangi bir yerde değiştirebiliriz
console.log(num); //! 5

const func1 = function () {
  num = 22; //!
  console.log(num); //! 22
};
func1();

console.log(num); //! 22
console.log(num++); //! 22
console.log(num); //! 23
console.log(++num); //! 24
console.log(num); //! 24

//?----------------------------------

let num1 = 7; //! Global Scope
console.log(num1); //! 7

const func2 = () => {
  let num1 = 11; //! Func Scope (burada "let" ile declare edince farklı bir adres tanımlamış olduk)
  console.log(num1); //! 11
};

func2();
console.log(num1); //! 7
