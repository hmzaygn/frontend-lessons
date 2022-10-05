// 'abba', ['aabb', 'abcd', 'bbaa', 'dada']

function anagrams(word, words) {
  let arr = [];
  let wordAscii = word.split("").reduce((a, b) => a + b.charCodeAt(), 0);
  for (let i of words) {
    let listAscii = i.split("").reduce((a, b) => a + b.charCodeAt(), 0);
    wordAscii === listAscii && arr.push(i);
  }
  return arr;
}

// function anagrams(word, words) {
//     word = word.split('').sort().join('');
//     return words.filter(function(v) {return word == v.split('').sort().join('');});
//   }

console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]));

//? *****************************************

function cakes(recipe, available) {
  let count = Infinity;
  for (let i in recipe) {
    if (available[i] === undefined) {
      count = 0;
      break;
    } else if (count > Math.floor(available[i] / recipe[i])) {
      count = Math.floor(available[i] / recipe[i]);
    }
  }

  return count;
}

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);
