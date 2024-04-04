// Counter.js
import React, { useState } from 'react';
import './App.css'; // Import CSS yang telah dibuat

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h2 className="counter-title">{props.title}</h2>
      <p className="counter-value">Count: {count}</p>
      <div className="counter-buttons">
        <button className="counter-button" onClick={increment}>Tambah</button>
        <button className="counter-button" onClick={decrement}>Kurang</button>
      </div>
    </div>
  );
};

export default Counter;
