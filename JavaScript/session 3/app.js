// let x = 3 == '3';
// console.log(x);

//////////////////////////////////////////

/* const a = 10;
const b = 5;
const c = 5;
let d = 3;
a == b; // a b'ye eşit mi ---> false
b == c; // b c'ye eşit olduğundan ---> true
b === c; // true, hem değeri hem tipi eşit
b ==='5'; // değer eşit fakat tip eşit değil ---> false
b == '5'; // değer eşit, tipine bakmadı --> true
c  !=  b; // eşit değil mi? false çünkü eşit */

/////////////////////////////////////////////////////

/* let userName;

let selamlama = (`Hoşgeldiniz ${userName} XYZ Bankası iyi günler diler`);

console.log(selamlama); */

/////////////////////////////////////////////

/* let user2 = (userName == undefined && 'Müşterimiz');
let selamlama2 = (`Hoşgeldiniz ${user2} XYZ Bankası iyi günler diler`);
console.log(selamlama2); */

/////////////////////////////////////////////////////

/* let temp = 0;
let hataDurumu = temp || 'termometre arızası';
let hataDurumu2 = temp ?? 'termometre arızası';

console.log(hataDurumu);
console.log(hataDurumu2); */

/////////////////////////////////////////////////////

/* let a = +prompt("enter a number");
let b = +prompt("enter a number");

console.log(a*b , a/b) */

///////////////////////////////////////////

/* let side1 = +prompt("Give me a number");
let side2 = +prompt("Give me a number");

console.log((side1 * 2) + (side2 * 2));
console.log(side1 * side2); */

////////////////////////////////////////////

/* let radius = +prompt("Enter radius :")

console.log(`Area of circle is ${Math.PI * (radius**radius)}`);
console.log(`Perimeter of circle is ${2 * Math.PI * radius}`); */

/////////////////////////////////////////////

/*
let celcius = +prompt("Give me celcius :");
let fahrenheit = +prompt("Give me fahrenheit :");

console.log(`${celcius} C° is ${(celcius * 1.8 + 32)} F°`);
console.log(`${fahrenheit}  F° is ${((fahrenheit - 32) / 1.8)} C°`);
*/

////////////////////////////////////////////

/*
let cTemp = +prompt('Enter celcius temperature');
const cToFahr = (cTemp * 9) / 5 + 32;
console.log(`${cTemp}°C equals ${cToFahr.toFixed(2)}°F`);

let fTemp = +prompt('Enter fahrenheit temperature');
const fToCel = ((fTemp - 32) * 5) / 9;
console.log(`${fTemp}°F equals  ${fToCel.toFixed(2)}°C`);
*/

/////////////////////////////////////////////

/*
const today = new Date();
console.log(today);

console.log(`Day of month is ${today.getDate()}`);
console.log(`Month of year is ${today.getMonth() + 1}`);
console.log(`Year is ${today.getFullYear()}`);
*/

/////////////////////////////////////////////


let a = +prompt("enter a number") % 10;
let b = +prompt("enter a number") % 10;
let c = +prompt("enter a number") % 10;

const d = ((a == b) || (a == c) || (b == c));

console.log(`There are at least 2 numbers having same first digits ${d}`);


/////////////////////////////////////////////