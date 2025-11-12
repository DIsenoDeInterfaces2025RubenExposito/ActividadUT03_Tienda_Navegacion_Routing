// src/components/ProductGrid.jsx
import React from 'react';
import ProductCard from './ProductCard';
import muebles from '../data/muebles'; // Importa tus datos de muebles (ruta corregida)
import '../index.css'; 

function ProductGrid() {
  return (
    <main id="main-content" role="main" tabIndex="-1">
      <section aria-labelledby="main-section-title" className="product-grid">
      {muebles.map((mueble) => (
        <ProductCard
          key={mueble.id} 
          nombre={mueble.nombre}
          precio={mueble.precio}
          imagen={mueble.imagen}
          descripcion={mueble.descripcion} 
        />
      ))}
      </section>  
    </main>
  );
}

export default ProductGrid;