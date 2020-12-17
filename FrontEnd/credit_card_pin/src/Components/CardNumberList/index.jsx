import React from "react";
import styles from "./styles.module.css";

export default function CardNumberList({ data, onDelete }) {
  return (
    <div className={styles.root}>
      {data.length > 0 &&
        data.map((item) => (
          <div key={item.key} className={styles.box}>
            <div className={styles.text}>{item.number}</div>
            <button
              className={styles.deleteBtn}
              onClick={() => onDelete(item.key)}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}
