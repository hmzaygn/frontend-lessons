console.log("JS module is running");

import karesi, {
  WHW,
  WORKING_HOURS_WEEK,
  dec,
  inc,
  sum,
  counter,
} from "./mymodule.js";

// import {
//   default as karesi,
//   WHW,
//   WORKING_HOURS_WEEK,
//   dec,
//   inc,
//   sum,
//   counter,
// } from "./mymodule.js";

// console.log("WHW :>>", WHW);
// console.log("WORKING_HOURS_WEEK :>>", WORKING_HOURS_WEEK);
// console.log("karesi(4) :>>", karesi(4));
// console.log("dec(2,5) :>> ", dec(2, 5));

inc(4);
inc(6);
dec();
console.log("dec() :>> ", dec());
inc();
console.log("counter :>> ", counter);
// counter = 29; //! module den alınan variable lara atama yapılamaz(read only)
inc(); //! metodlar ile değişiklik yapılabilir sadece
console.log("counter :>> ", counter);
