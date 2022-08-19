// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("****** WHILE *******");

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

/*
let grade = +prompt("Enter a grade between 0-100 :");

while(grade < 0 || grade > 100){
    console.log("The grade must between 0 and 100");
    grade = +prompt("Enter a grade between 0-100 :");
}

console.log("Your grade is", grade)
*/

// * ============================================
// *            DONGULER(LOOPS)- DO-WHILE
// * ============================================

console.log("****** DO-WHILE *******");

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu do-while dongusu ile yaziniz
/*
let grade1;
do {
  grade1 = +prompt("Enter a grade between 0-100 :");
  if (grade1 < 0 || grade1 > 100) {
    console.log("The grade must between 0 and 100");
  }
} while (grade1 < 0 || grade1 > 100);

console.log("Your grade is", grade1);
*/
//? Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

let counter = 5;
const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);
let guess;
let again = true;
while (again) {
  do {
    guess = +prompt("Guess a number between 0 and 100:");
    counter -= 1;
    if (guess === randomNumber) {
      console.log(`Congratulations you have won at ${5 - counter}. try :)`);
      break;
    } else if (guess < randomNumber) {
      console.log(
        `You should increase 🔼 your guess. You have ${counter} guess rights`
      );
    } else {
      console.log(
        `You should decrease 🔽 your guess. You have ${counter} guess rights`
      );
    }
  } while (counter > 0);

  if (counter + 1 === 0) {
    console.log("Sorry you have lost 😥😥");
  }

  let choose = prompt('Press "Y" to play again or "N" to exit.').toUpperCase();
  if (choose === "N") {
    console.log("Nice game. See you...");
    again = false;
    break;
  }
}

/*
let counter = 0;
let sum = 0;
let grade;

while (true) {
  grade = prompt(`Enter grades or press "Q" or "q" to exit`).toLowerCase();
  if (grade < 0 || grade > 100) {
    console.log(`You have to enter a valid number`);
    sum -= Number(grade);
    counter--;
  } else if (grade === "q") {
    console.log(`The average of grades = ${sum / counter}`);
    break;
  }
  sum += Number(grade);
  counter += 1;
}
*/

while (true) {
  const randomSayi = Math.round(Math.random() * 100);
  let hak = 5;
}
