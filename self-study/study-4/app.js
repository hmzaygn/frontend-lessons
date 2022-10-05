// function persistence(num) {
//   let strArr = String(num).split("");
//   counter = 0;
//   while (strArr.length > 1) {
//     strArr = String(strArr.reduce((acc, e) => acc * e, 1)).split("");
//     counter += 1;
//   }
//   return counter;
// }

// console.log(persistence(999));

// const persistence = (num) => {
//   return `${num}`.length > 1
//     ? 1 + persistence(`${num}`.split("").reduce((a, b) => a * +b))
//     : 0;
// };

// console.log(persistence(9999));

// function findUniq(arr) {
//     return (arr.filter((e,i) => e != arr[i+1] && e)).join("")
//   }

let arr = [1, 1, 1, 1, 1, 5];

function findUniq(arr) {
  arr.sort();
  if (arr[0] != arr[1]) {
    return arr[0];
  } else if (arr[arr.length - 1] != arr[arr.length - 2]) {
    return arr[arr.length - 1];
  }
}

console.log(arr[arr.length - 1]);

// console.log(arr.filter((e, i) => e != arr[i+1] && e));

let word = "Din";

function duplicateEncode(w) {
  let word = w.toLowerCase();
  let result = "";
  for (let i of word) {
    if (word.indexOf(i) === word.lastIndexOf(i)) {
      result += "(";
    } else {
      result += ")";
    }
  }
  return result;
}

console.log(duplicateEncode(word));

//? tribonacci([0,0,1],10),[0,0,1,1,2,4,7,13,24,44]

function tribonacci(signature, n) {
  let s = [...signature];
  let summ = 0;
  if (n == 0) {
    return [];
  } else if (n == 1) {
    return [s[0]];
  } else if (n == 2) {
    s.pop();
    return s;
  } else {
    for (let i = 0; i < n - signature.length; i++) {
      summ = s[s.length - 1] + s[s.length - 2] + s[s.length - 3];
      s.push(summ);
      summ = 0;
    }
  }

  return s;
}

console.log(tribonacci([0, 0, 1], 2));

//? *************************************
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

function findMissingLetter(array) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  for (let i of array) {
    if (
      alphabet.indexOf(i) !==
      alphabet.indexOf(array[array.indexOf(i) + 1]) - 1
    ) {
      return alphabet[alphabet.indexOf(i) + 1];
    }

    // return alphabet.indexOf(i) !== (alphabet.indexOf(array[array.indexOf(i) + 1]) -1) && alphabet[alphabet.indexOf(i)+1]
  }
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
