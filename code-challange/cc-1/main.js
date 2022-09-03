//******** Array Challenge **********/
console.log("main.js working");

const sortArr = function (arr, n) {
  if (n > arr.length || n <= 0) {
    return "Out of range";
  }
  arr.sort((a, b) => {
    return a - b;
  });
  return arr[n - 1];
};

let array1 = [2, 35, 14, 3, 12, 15];

console.log(sortArr(array1, 2));
console.log(array1);

//*************** TR Identity Number Validity *****************/

const idControl = function (str) {
  if (str.length !== 11 || +str[0] === 0) {
    return "Invalid ID Number";
  }

  let even = +str[1] + +str[3] + +str[5] + +str[7];
  let odd = +str[0] + +str[2] + +str[4] + +str[6] + +str[8];

  const s10 = (odd * 7 - even) % 10;
  const s11 = (even + odd + s10) % 10;

  return s10 === +str[9] && s11 === +str[10] ? "Id is valid" : "Id is invalid";
};

const id = "10880383988";

console.log(idControl(id));

//******* ROLL THE DICES***********

const roll = (number) => {
  for (let i = 1; i <= number; i++) {
    let rol1 = Math.ceil(Math.random() * 6);
    let rol2 = Math.ceil(Math.random() * 6);
    const arr = ["one", "two", "three", "four", "five", "six"];
    if (rol1 > rol2) {
      console.log(`${i}. times => ${arr[rol2 - 1]} - ${arr[rol1 - 1]}`);
    } else {
      console.log(`${i}. times => ${arr[rol1 - 1]} - ${arr[rol2 - 1]}`);
    }
  }
};
roll(10);

// ******* Student Registration **************

const arr = [
  "C1234 - John Doe, London, Full-Stack",
  "C2345 - Jane Doe, London, Data-Science",
  "C2346 - Mary Ann, Paris, AWS-Devops",
  "C2347 - Adam Smith, Texas, AWS-Devops",
  "C2444 - Michael Great, Arizona, Full-Stack",
  "C2555 - William Cash, Manchester, Data-Science",
  "C2455 - Patrick Jane, Madrid, Full-Stack",
];

const student = (a) => {
  a.map((str) => {
    let result = str.split(" ");
    console.log(`Student Nr: ${result[0]}\n
First Name: ${result[2]}\n
Last Name: ${result[3].slice(0, -1)}\n
Location: ${result[4].replace(/,$/, "")}\n
Program: ${result[5]}\n
==========================`);
  });
};
student(arr);

//******* E-mail Validator **************

// const email = prompt("please enter your email");
function isValid(frm) {
  let atpos = email.indexOf("@");
  let dotpos = email.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    alert("Invalid");
    return false;
  } else {
    alert("Valid");
    return true;
  }
}
isValid(email);
