//* ======================================================
//*                        EVENTS
//* ======================================================

console.log("****** EVENTS *******");

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

const h1 = document.querySelector("#header h1");
// console.log(h1);
//? 3. Method
h1.onmouseover = function () {
  h1.style.color = "red";
  h1.style.fontWeight = "300";
  //   console.log("onmouseover");
};

h1.onmouseout = () => {
  h1.style.color = "black";
  h1.style.fontWeight = "900";
  //   console.log("onmouseout");
};

//* EXAMPLE-2 (addEventListener())
//* -------------------------------------------------
//? 4. Method
h1.addEventListener("click", () => {
  alert("H1 pressed");
});

document.getElementById("btn").addEventListener("click", function () {
  const input = document.querySelector("#input");
  //   if (!input.value) {
  //     alert("Please enter an item");
  //   } else {
  //     alert(`You have entered "${input.value}"`);
  //   }

  !input.value
    ? alert("Please enter an item")
    : alert(`You have entered "${input.value}"`);

  input.value = "";
  //   document.querySelector("#input").focus();
  input.focus();
});

//* EXAMPLE-3
//* -------------------------------------------------
const list = document.querySelectorAll(".list"); //?nodeList
// console.log(list);

list.forEach((li) => {
  li.style.transition = "all 0.8s";
  li.style.lineHeight = "2rem";

  li.onmouseover = () => {
    li.style.fontSize = "2rem";
    li.style.transform = "translateX(10px)";
    li.style.color = "red";
  };

  li.onmouseout = () => {
    li.style.fontSize = "1rem";
    li.style.transform = "translatseX(-10px)";
    li.style.color = "black";
  };
});

//* EXAMPLE-4 (onLoad)
//* -------------------------------------------------
window.onload = function () {
  document.querySelector("#input").focus();
};

// const print = () => {
//   console.log("starting");
// };
// print();
