// src/components/ProductGrid.jsx
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import muebles from "../data/muebles";
import "../theme/styles/index.css";

/**
 * Componente que muestra una cuadrícula con todos los productos disponibles.
 * Cada producto es clickeable y navega a su página de detalle.
 * Incluye atributos de accesibilidad (role, aria-labelledby, tabIndex).
 *
 * @returns {JSX.Element} Cuadrícula de productos con enlaces a páginas de detalle
 */
export default function ProductGrid() {
  return (
    <main id="main-content" role="main" tabIndex="-1">
      <section aria-labelledby="main-section-title" className="product-grid">
        {muebles.map((mueble) => (
          <Link key={mueble.id} to={`/Productos/${mueble.id}`}>
            <ProductCard
              nombre={mueble.nombre}
              precio={mueble.precio}
              puntuacion={mueble.puntuacion}
              imagen={mueble.imagen}
              descripcion={mueble.descripcion}
            />
          </Link>
        ))}
      </section>
    </main>
  );
}
