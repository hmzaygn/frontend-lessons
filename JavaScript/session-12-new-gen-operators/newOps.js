//* ======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================
console.log("****** NEW OPERATORS *******");

const car = {
  name: "BMW",
  model: 1990,
  engine: 1.6,
  colors: ["blue", "purple"],
};

//* 1. Yöntem (classical)

const name1 = car.name;
const model1 = car["model"];

//* 2. Yöntem (destructuring)

const { name: carName, colors, model, engine } = car;

console.log(carName, model, engine, colors);

//* EXAMPLE: NESTED
const cars = {
  car1: {
    name: "BMW",
    model: 1990,
    engine: 1.6,
  },
  car2: {
    name: "Mercedes",
    model: 2022,
    engine: 2.0,
  },
};

const { car1, car2 } = cars;
console.log(car1);

const { name: c1Name, model: c1Model } = car1;
const { name: c2Name, model: c2Model } = car2;

console.log(c1Name, c2Name);

//* Example

const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "Josh",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];

//* Classical
team.forEach((p) => {
  console.log("****************");
  console.log("Name :", p.name);
  console.log("Surname :", p.surname);
  console.log("Job :", p.job);
  console.log("Age :", p["age"]);
});

//* DESTRUCTURING

team.forEach((p) => {
  const { name, surname, job, age } = p;
  console.log("****************");
  console.log("Name :", name);
  console.log("Surname :", surname);
  console.log("Job :", job);
  console.log("Age :", age);
});

//* Function

//? functon un döndürdüğü object doğrudan destructure yapılabilir
const getInfo = () => {
  return {
    id: 1,
    productName: "Iphone",
    price: 30000,
  };
};

console.log(getInfo());

const { productName, price } = getInfo();
console.log("Product Name :", productName);
console.log("Price :", price);

//? fonksiyonların object parametreleri doğrudan destructure yapılabilir
const calculate = ({ id, price }) => {
  console.log(price * 1.1);
};

calculate({ id: 1, price: 3000 });

//* ======================================================
//*  DESTRUCTURING (ARRAY)
//* ======================================================
const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"];

//* Classical

const mehmet = names[1]; //? indexing

//* Destructuring

const [p1, p2, , p4] = names;
console.log(p1, p2, p4);

//*======================================================
//*  REST (...)
//* ======================================================
//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//* REST: (Arrays)
const autos = ["anadol", "reno", "bmw", "mercedes", "ferrari"];

const [anadol, reno, , ...restAutos] = autos; //! rest operatörü sonda olmak zorunda
console.log(reno, anadol);
console.log(restAutos);

//* REST (Objects)

const personel = {
  pName: "john",
  surname: "smith",
  job: "developer",
  age: 30,
};

const { pName, job, ...ageSurname } = personel;
console.log(ageSurname);
console.log(pName, job);

//! 2 - Bir function un argumanlarını  diziye çevirmek için kullanılabilir

//? hata vermez sadece ilk 2 argümanı toplar
const sum = (x, y) => x + y;
console.log(sum(1, 2, 3, 4, 5, 6));

const sumAll = (...numbers) => {
  //   console.log(numbers); //? [1, 2, 3, 4, 5, 6]
  return numbers.reduce((sum, n) => (sum += n), 0);
};

console.log("SUM OF NUMBERS :", sumAll(1, 2, 3, 4, 5, 6));

//* ÖRNEK

const showName = (name, surname, ...titles) => {
  const summary = `${name} ${surname} is a ${titles.join(" and ")}`;
  console.log(summary);
};

showName(`Noah`, `Adams`, `Developer`, `Instr`, `Professor`, `Dad`);

//*======================================================
//*  SPREAD (...)
//* ======================================================
//? Spread operatoru ise iterables olan bir elemani bireysel
//? degerler haline getirir.

//! array concatanation
const flyingVecihles = ["Aircraft", "Helicopter", "QuadCopter"];
const automobiles = ["Truck", "Bus", "Car", "SUV"];

const allVehicles = [...flyingVecihles, ...automobiles];
console.log(allVehicles);

//* Example

const citrus = ["orange", "lime", "lemon"];

const fruits = ["apple", ...citrus, "banana", "cherry", "pear"];
console.log(fruits);

//! String Spread

let str = "Hello FS12";
console.log([...str]);

const charArray = [...str];
console.log(str);
console.log(charArray);

charArray[0] = "X";
console.log(charArray, str);

//! Max() - Dizileri func lara açık bir şekilde parametre olarak vermek için
console.log(Math.max(1, 3, 5, 2, 10));

const nums = [1, 3, 5, 2, 10];
console.log(Math.max(nums)); //? NaN
console.log(Math.max(...nums));

// Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345

const enKucukBul1 = (arr) => arr.sort((a, b) => a - b)[0];
console.log(enKucukBul1([34, 15, 88, 2]));

const enKucukBul2 = (arr) => Math.min(...arr);
console.log(enKucukBul2([34, 15, 88, 2]));

//! Array Copy

const myNumbers = [1, 2, 3];
const herNumbers = [-1, ...myNumbers, 7];
const hisNumbers = [...herNumbers];
hisNumbers.push(101);
console.log(herNumbers);
console.log("HIS :", hisNumbers, "MY :", myNumbers);

//! Object Copy

const myObj = { a: 1, b: 2, c: 3 };
const herObj = { a: 2, z: 4, k: 3 };
const copiedObj = { ...myObj };
const combinedObj = { ...myObj, ...herObj };

console.log("Combined :", combinedObj);

console.log(copiedObj);

copiedObj.c = "33";
console.log(copiedObj, myObj);
