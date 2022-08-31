//* =====================================================
//*                     FOR LOOP
//* ======================================================

//? --------------------ÖRNEK--------------------
console.log("******* LOOPS IN ARRAYS ******");

const dizi = [-5, 15, 22, -4, 45, 78];

const topla = (n) => {
  let negatifler = 0;
  let pozitifler = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] < 0) {
      negatifler += n[i];
    } else {
      pozitifler += n[i];
    }
  }
  console.log(`Dizideki Pozitif Sayıların Toplamı: ${pozitifler}`);
  console.log(`Dizideki Pozitif Sayıların Toplamı: ${negatifler}`);
};
topla(dizi);

//? --------------------ÖRNEK--------------------

const dizilereAyir = (n) => {
  let negatifler = [];
  let pozitifler = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i] < 0) {
      negatifler.push(n[i]);
    } else {
      pozitifler.push(n[i]);
    }
  }
  console.log(pozitifler);
  console.log(negatifler);
};
dizilereAyir(dizi);

//? --------------------ÖRNEK--------------------
//? Dizideki notlarin ortalamasini hesaplayiniz.
const notlar = [55, 77, 23, 89, 100];

let toplam = 0;
for (let i = 0; i < notlar.length; i++) {
  toplam += notlar[i];
}

console.log(`Ortalama : ${toplam / notlar.length}`);

//* ======================================================
//*                   FOR-IN LOOP
//* ======================================================

//? --------------------ÖRNEK--------------------
const num = [-5, 15, 22, -4, 45, 78];
let summ = 0;

for (let i in num) {
  summ += num[i];
}
console.log(summ);

//? --------------------ÖRNEK--------------------

const names = ["Ahmet", "Can", "Mustafa", "Ayşe"];
const surNames = ["Öztürk", "Yılmaz", "Arı", "Çalı"];

const combine = (x, y) => {
  let fullNames = [];
  for (let i in x) {
    fullNames[i] = `${x[i]} ${y[i]}`;
  }
  return fullNames;
};

console.log(combine(names, surNames));

//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];
/*
const findStudent = (arr, search) => {
  let counter = 0;
  for (let i in arr) {
    if (search === arr[i]) {
      counter++;
    }
  }

  if (!counter) {
    return `${search} can not be found`;
  } else {
    return `${search} is found ${counter} times`;
  }
};

const name = prompt("Enter a name :").toLocaleLowerCase("TR");
console.log(findStudent(students, name));
*/
//* ======================================================
//*                   FOR-OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini
//* kapsayacak sekilde guncellenmis halidir. Bu dongude dizi
//* icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

console.log("***FOR-OF LOOP***");

const findStudentOf = (arr, search) => {
  let counter = 0;
  for (let item of arr) {
    //?ternary
    // search === item ? counter++ : null;

    //! Short-circuit Yöntemi : && => koşul doğru (true) ise ifadeyi çalıştırır
    search === item && counter++;

    //! Short-circuit Yöntemi : || => koşul yanlış (false) ise ifadeyi çalıştırır
    // search === item || counter++;
  }

  return !counter
    ? `${search} can not be found`
    : `${search} is found ${counter} times`;
};

const studentName = prompt("Enter a name :").toLocaleLowerCase("TR");
console.log(findStudentOf(students, studentName));
