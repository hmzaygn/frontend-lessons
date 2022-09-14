//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//? 1-100 arasında rastgele bir sayı tut

let randomNumber = Math.round(Math.random() * 100);
// const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

//? variables
let score = 10;
// let topScore = 0;

//? local storage dan topScore u alıp değişkene atar
let topScore = localStorage.getItem("topScore") || 0;
//? DOM daki topScore değerini localStorage dan okuyarak güncelle
document.querySelector(".top-score").textContent = topScore;

//* checkBtn basıldığında kontrolleri yap

document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg");
  const body = document.querySelector("body");

  //? eğer input girilmediyse kullanıcıya uyarı ver

  if (!guessInput) {
    msg.innerText = "Please enter your guess";

    //! eğer rastgele == input.value
    //? tebrikler bildiniz
    //? background = green
  } else if (randomNumber === guessInput) {
    msg.innerHTML = `Congratulations! You Win... <i class="fa-solid fa-face-grin-hearts fa-2x"></i>`;
    // document.querySelector("body").style.background = "green";
    body.className = "bg-success";
    document.querySelector(".check-btn").disabled = true;

    if (score >= topScore) {
      //   topScore = score;

      //? localStorage daki topScore değerini güncelle
      localStorage.setItem("topScore", score);
      //? DOM daki topScore değerini güncelle
      document.querySelector(".top-score").textContent = score;
    }

    document.querySelector(".secret-number").textContent = randomNumber;
    //! eğer rastgele != input.value
  } else {
    score--;
    if (score > 0) {
      guessInput > randomNumber
        ? (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-down fa-2x"></i> DECREASE `)
        : (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-up fa-2x"></i> INCREASE `);
      document.querySelector(".guess-input").value = "";
    } else {
      msg.innerHTML = `"Sorry you lost" <i class="fa-regular fa-face-sad-tear fa-2x"></i>`;
      body.className = "bg-danger";
      document.querySelector(".check-btn").disabled = true;
      document.querySelector(".secret-number").textContent = randomNumber;
    }

    document.querySelector(".score").textContent = score;
  }
});

//* again basıldığında ayunu başlangıç değerlerine kur
document.querySelector(".again-btn").addEventListener("click", () => {
  score = 10;
  document.querySelector(".score").textContent = score;
  randomNumber = Math.round(Math.random() * 100);
  console.log(randomNumber);
  document.querySelector(".check-btn").disabled = false;
  document.querySelector(".secret-number").textContent = "?";
  document.querySelector("body").classList.remove("bg-success", "bg-danger");
  document.querySelector(".guess-input").value = "";
  document.querySelector(".msg").innerText = `Starting..`;
});

document.querySelector(".guess-input").addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    document.querySelector(".check-btn").click();
  }
});

//* PSEUDO
//? eğer şuan ki score > topScore
//* topScore = score
//* secretNumber = görünür

//! değilse
//! eğer score > 0
//! score = score - 1
//? eğer rastgele < input.value
//? azalt
//? eğer rastgele > input.value
//? arttır
//! eğer (!score > 0)
//?üzgünüz kaybettiniz
