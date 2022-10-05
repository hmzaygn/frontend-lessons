//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------

// const bekle = (waitingTime) => {
//   const startTime = new Date().getTime();
//   while (new Date().getTime() < startTime + waitingTime);
// };

// console.log("Hello");
// // alert("CW"); //! blocking code

// console.time("timer");
// bekle(3000); //! blocking code
// console.timeEnd("timer");
// console.log("FS12");

//* Asenkron (setTimeOut)
//* ------------------------------------------------

// console.log("timeout");
// setTimeout(() => {
//   //! nonblocking code
//   console.log("Hi");
// }, 2000);
// setTimeout(() => {
//   console.log("Hello");
// }, 500);
// console.log("timeout bitti");

//* Asenkron (setInterval, clearInterval)
//* ------------------------------------------------

// console.log("Timer Started");
// let counter = 0;
// const intervalId = setInterval(() => {
//   console.log(++counter);
//   if (counter >= 5) {
//     clearInterval(intervalId);
//     console.log("Timer Stopped");
//   }
// }, 1000);

// let counter = 10;

// const intervalId = setInterval(() => {
//   console.log(counter--);
//   if (counter == -1) {
//     clearInterval(intervalId);
//     console.log("Timer Stoped");
//   }
// }, 1000);

//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

setTimeout(() => {
  console.log("john:Hi");
  setTimeout(() => {
    console.log("Sarah: Hello");
    setTimeout(() => {
      console.log("John: How Are you?");
      setTimeout(() => {
        console.log("Sarah:Fine and you?");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

//? COZUMLER:
//?----------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise,
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)
