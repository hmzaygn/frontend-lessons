import { useState } from "react";

const KeyboardClipboard = () => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    // console.log(e.keyCode);
    if (
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 96 && e.keyCode <= 105)
    ) {
      alert("this place only belongs to strings");
      e.preventDefault();
    }

    e.keyCode === 13 && setInputValue("");
  };

  const handleAreaPaste = (e) => {
    e.target.style.border = "2px solid red";
    e.target.value += e.clipboardData.getData("text").toLocaleLowerCase();
    e.preventDefault();
  };

  return (
    <div className="container text-center">
      <h1>CLIPBOARD EVENTS</h1>
      <input
        className="form-control"
        type="text"
        value={inputValue}
        onChange={(e) => {
          e.target.value = e.target.value.toLocaleUpperCase();
          setInputValue(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />

      <p
        onCopy={(e) => {
          e.preventDefault();
          alert("you can not copy this!!!");
        }}
        className="text-center mt-4"
      >
        {inputValue}
      </p>

      <textarea
        className="form-control"
        name="area"
        id="area"
        rows="10"
        onPaste={handleAreaPaste}
      ></textarea>
    </div>
  );
};

export default KeyboardClipboard;
