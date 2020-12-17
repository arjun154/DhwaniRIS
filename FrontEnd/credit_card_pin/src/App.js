import React, { useState } from "react";
import CardInput from "./Components/CardInput";
import NumberList from "./Components/CardNumberList";
import { v4 as uuid } from "uuid";

import "./App.css";

export default function App() {
  const [cardNumbers, setCardNumbers] = useState([]);

  // add new card number to the state
  const handleSubmit = (value) => {
    let obj = { key: uuid(), number: value };
    setCardNumbers((prevState) => {
      return [...prevState, obj];
    });
  };

  // function to remove number card from the page
  const handleDelete = (key) => {
    let newCardList = cardNumbers.filter((item) => item.key !== key);
    setCardNumbers([...newCardList]);
  };

  return (
    <div className="App">
      <h1>Enter Card Number*</h1>
      <CardInput inputBoxes={4} maxCharacter={4} onSubmit={handleSubmit} />
      <NumberList data={cardNumbers} onDelete={handleDelete} />
    </div>
  );
}
