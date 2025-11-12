// src/App.jsx
import React from 'react';
import ProductGrid from './components/ProductGrid';
import './index.css'; 

function App() {
  return (
    <div className="App">
      <h1>Nuestros Muebles</h1>
      <ProductGrid />
    </div>
  );
}

export default App;
