import { useParams, useNavigate } from "react-router-dom";
import muebles from "../data/muebles";

/**
 * Componente que muestra la página de detalle de un producto individual.
 * Obtiene el ID del producto desde los parámetros de la URL y muestra
 * toda la información detallada del producto incluyendo imagen, precio,
 * puntuación y descripción.
 *
 * @returns {JSX.Element} Página de detalle del producto con botón de volver,
 *                        información del producto e imagen.
 */
export default function DetalleProducto() {
  const { id } = useParams();
  const navigate = useNavigate();

  const producto = muebles.find((p) => p.id === parseInt(id));

  const precioFormateado = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(producto.precio);

  return (
    <main className="detalle-container">
      <button onClick={() => navigate(-1)} className="btn-back">
        ← Volver
      </button>
      <div className="detalle-content">
        <section className="detalle-info">
          <h1 className="detalle-title">{producto.nombre}</h1>
          <div className="detalle-price-row">
            <p className="detalle-price">{precioFormateado}</p>
            <p className="detalle-score">{producto.puntuacion} / 5.0</p>
          </div>
          <p className="detalle-description">{producto.descripcion}</p>
        </section>
        <figure className="detalle-image-wrap">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="detalle-image"
          />
        </figure>
      </div>
    </main>
  );
}
