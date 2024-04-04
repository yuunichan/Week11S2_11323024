// App.js
import React from 'react';
import './App.css';
import Counter from './Counter'; 

const App = () => {
  return (
    <div>
      <h1>Menambahkan dan Mengurangkan</h1>
      <Counter title="Hitung Angka" /> {/* Gunakan komponen Counter di sini */}
    </div>
  );
};

export default App;
