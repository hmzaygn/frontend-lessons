console.log("**** TRAVERSING DOM ****");

//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//* 1- Yukari Yonde (parent) traverse
//*----------------------------------------------
//! .parentNode
const list = document.querySelector(".list");
const ul = list.parentNode;
ul.style.border = "2px solid red";

console.log(list.parentNode.parentNode.parentNode.parentNode.parentNode); //? document

//! .parentElement
console.log(list.parentElement);

//! closest(): belirtilen elementin parent'larıdan ilk uygun parent i seçer
const itemListSec = list.closest("section");
itemListSec.style.background = "gray";

//* 2- Aşağı Yonde (children) traverse
//*----------------------------------------------
const addItem = document.querySelector(".add-item");
console.log(addItem.children);

const h2 = addItem.children[0];
h2.style.color = "blue";

console.log(addItem.parentNode.parentNode.children); //? header

console.log("******first child******");
console.log(ul.firstChild);
console.log(ul.firstChild.innerText);

console.log(ul.firstElementChild);
console.log(ul.firstElementChild.innerText);

//* 3- Yatay Yonde (sibling) traverse
//*----------------------------------------------

//! NextElementSibling, previousElementSibling

const myList = ul.children;
console.log(myList);

const javascript = myList[2];

const css = javascript.previousElementSibling;
css.style.background = "yellow";

const react = javascript.nextElementSibling;
console.log(react.textContent);

console.log(javascript.previousElementSibling.previousElementSibling.innerText);
