import ProductGrid from "../components/ProductGrid.jsx";

/**
 * Componente de la página de productos.
 * Renderiza el componente ProductGrid que muestra todos los productos disponibles.
 *
 * @returns {JSX.Element} Página de productos con cuadrícula de todos los productos
 */
export default function Productos() {
  return (
    <>
      <main className="Productos">
        <ProductGrid />
      </main>
    </>
  );
}
