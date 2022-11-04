//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

import { useState, useEffect } from "react";

//! useEffect(() => {
//*   /* ComponentDidMount code */
//! }, []);

//! useEffect(() => {
//*   */ ComponentDidMount + componentDidUpdate code */
//! }, [var1, var2]);

//! useEffect(() => {
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [var1, var2]);

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  //   //? componentDidMount
  //   //! fetch, async-await, localStorage, steTimeOut, setInterval vs için kullanılır
  //   useEffect(() => {
  //     console.log("Mounting");
  //     setTimeout(() => {
  //       alert("data fetched");
  //     }, 1000);
  //   }, []);

  //? componentDidMount + componentDidUpdate
  //   useEffect(() => {
  //     console.log("Mounting + Updating");
  //     setTimeout(() => {
  //       alert("data fetched");
  //     }, 1000);
  //   }, []); //! array i silmek herzaman mount+update gibi çalışır (componentdeki herhangi bir state değişirse çalışır)

  //? componentDidUnmount

  const fetchData = () => {
    console.log("Data Fetched");
  };

  useEffect(() => {
    //! componentDidUnmount
    const timerId = setInterval(fetchData, 1000);
    console.log("Mounting");

    return () => {
      //! componentWillUnmount
      clearInterval(timerId);
      console.log("Unmounting");
    };
  }, []);

  console.log("Rendering");

  return (
    <div className="container text-center">
      <h1 className="text-danger">Use Effect</h1>
      <h3>COUNT={count}</h3>
      <button className="btn btn-info me-1" onClick={() => setCount(count + 1)}>
        INC
      </button>

      <button
        className="btn btn-danger ms-1"
        onClick={() => setCount(count - 1)}
      >
        Dec
      </button>
    </div>
  );
};

export default UseEffectHook;
