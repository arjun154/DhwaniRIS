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

  // changing focus on pressing backspace and submit on click enter button
  const handlekeyPress = (e, i) => {
    if (e.keyCode === 8 && !e.target.value && i - 1 >= 0) {
      items[i - 1].focus();
    } else if (e.keyCode === 13 && values[inputBoxes - 1].length === 4) {
      let value = values.join("");
      onSubmit(value);
    }
  };

  const clearData = () => {
    setValues(new Array(inputBoxes).fill(""));
    console.log(values, items);
  };

  // handling submit button click
  const handlesubmit = () => {
    if (values[inputBoxes - 1].length === 4) {
      let value = values.join("");
      onSubmit(value);
      clearData();
    }
  };

  // paste data from clipboard
  const handlePaste = (e) => {
    const data = e.clipboardData
      .getData("Text")
      .slice(0, maxCharacter * inputBoxes)
      .split("");

    // extract data and save into input boxes
    let len = Math.ceil(data.length / maxCharacter);

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < maxCharacter; j++) {
        let val = data[j + i * maxCharacter];
        if (val) values[i] += val;
      }
      if (values[i].length === maxCharacter && i < len - 1) {
        items[i].focus();
      }
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
          value={values[i]}
          ref={(r) => (items[i] = r)}
        />
      ))}
      <button className={styles.btn} onClick={handlesubmit}>
        Submit
      </button>
    </div>
  );
}
