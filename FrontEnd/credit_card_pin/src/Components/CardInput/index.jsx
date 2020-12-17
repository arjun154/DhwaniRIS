import React, { useState } from "react";
import styles from "./styles.module.css";

export default function CardInput({ inputBoxes, maxCharacter, onSubmit }) {
  const [values, setValues] = useState(new Array(inputBoxes).fill(""));
  const items = [];

  // handling input values change
  const handleChange = (e, i) => {
    const value = e.target.value;

    // set value to array
    setValues((prevState) => {
      prevState[i] = value;
      return [...prevState];
    });

    // manage focus
    if (e.target.value.length === maxCharacter && i + 1 < inputBoxes) {
      items[i + 1].focus();
    }
  };

  // changing focus on pressing backspace button
  const handlekeyPress = (e, i) => {
    if (e.keyCode === 8 && !e.target.value && i - 1 >= 0) {
      items[i - 1].focus();
    } else if (e.keyCode === 13 && values[3].length === 4) {
      let value = values.join("");
      onSubmit(value);
    }
  };

  // paste data from clipboard
  const handlePaste = (e) => {
    const data = e.clipboardData
      .getData("Text")
      .slice(0, maxCharacter * inputBoxes)
      .split("");

    // extract data and save into input boxes
    for (let i = 0; i < data.length; i++) {
      if (i >= 0 && i <= 3) {
        values[0] += data[i];
        if (i === 3) items[0].value = values[0];
      }
      if (i >= 4 && i <= 7) {
        values[1] += data[i];
        if (i === 7) items[1].value = values[1];
      }
      if (i >= 8 && i <= 11) {
        values[2] += data[i];
        if (i === 11) items[2].value = values[2];
      }
      if (i >= 12 && i <= 15) {
        values[3] += data[i];
        if (i === 15) items[3].value = values[3];
      }
    }
    // set focus to the last filled input box
    if (data.length <= 4) {
      items[0].focus();
    } else {
      let i = Math.floor(data.length / 4);
      items[i - 1].focus();
    }
  };

  return (
    <div className={styles.root} onPaste={handlePaste}>
      {values.map((v, i) => (
        <input
          className={styles.input}
          maxLength="4"
          key={i}
          onKeyDown={(e) => handlekeyPress(e, i)}
          onChange={(e) => handleChange(e, i)}
          ref={(r) => (items[i] = r)}
        />
      ))}
    </div>
  );
}
