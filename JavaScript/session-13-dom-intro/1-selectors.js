console.log("***** SELECTORS *****");

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

//* EXAMPLE-1
//*-------------------------------------------
const h1 = document.getElementById("header");
console.log(h1);

h1.style.color = "white";
h1.style.backgroundColor = "red";

//* EXAMPLE-2
//*-------------------------------------------

const myInput = document.getElementById("input");
const button = document.getElementById("btn");

btn.style.background = "black";
btn.style.color = "white";
btn.style.border = "none";
btn.style.borderRadius = "10px";
btn.style.width = "7rem";
btn.style.width = "7rem";
btn.style.padding = "1rem";
btn.style.fontSize = "1.1rem";

myInput.style.padding = "1rem";
myInput.style.borderRadius = "10px";

//*===========================================
//*            GETELEMENTBYTAGNAME()
//*===========================================

//* EXAMPLE-3
//*-------------------------------------------

const list = document.getElementsByTagName("li");
console.log(list); //? HTML Collection

list[2].style.color = "red";
list.item(3).style.color = "blue"; //? item metodu

const elementThree = list.item(3);
elementThree.textContent = "React / Vue / Angular";

list[4].innerText = "Django / Flask";

console.log("TEXT CONTENT :", list[1].textContent);
console.log("INNER TEXT :", list[1].innerText);

//? HTML kodlarını çalıştırır. (Güvenlik açısından problemli)
list[4].innerHTML = "<a href='https://www.clarusway.com'>Clarusway Web</a>";

//*===========================================
//*            GETELEMENTBYCLASSNAME()
//*===========================================
const myList = document.getElementsByClassName("list");
console.log(myList); //? HTML Collection

console.log(myList[1].innerText);

//? HTML Collection larda array metodları doğrudan kullanılamaz
// myList.forEach((item) => console.log(item.innerText));

//? Array.from()
const myListArray = Array.from(myList);
myListArray.forEach((item) => console.log(item.innerText));

//? Spread(...)
[...myList].forEach((item) => console.log(item.innerText));

[...myList].forEach((item) => (item.style.color = "red"));

//* ========================================
//*              QUERYSELECTOR()
//* ========================================

//? 1 - queryselector() etiket seçilebilir

const myLi = document.querySelector("li"); //! ilk elemanı seçer
console.log(myLi.innerText);
myLi.style.color = "yellowgreen";

//? 2 - queryselector() class seçilebilir

const itemList = document.querySelector(".item-list");
itemList.style.background = "gray";

//? 3 - queryselector() id seçilebilir

const input = document.querySelector("#input");
console.log(input.value); //! inputların değeri value ile alınır

document.querySelector("#btn").style.cursor = "pointer";

//? 4 - queryselector() CSS deki gibi seçim yapılabilir

const itemH2 = document.querySelector(".item-list h2");

itemH2.style.color = "purple";

const myBtn = document.querySelector("input[type='button']");
myBtn.style.background = "green";

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================
const lists = document.querySelectorAll("ul li");
console.log(lists); //? NodeList getirir

lists.forEach((li) => console.log(li.innerText));

console.log(document.querySelector("section ul li:nth-child(3)").innerText);
