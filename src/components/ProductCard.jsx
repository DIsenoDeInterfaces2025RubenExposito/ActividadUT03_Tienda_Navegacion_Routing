/**
 * Componente que representa una tarjeta de producto individual.
 * Muestra la imagen, nombre y precio formateado del producto.
 *
 * @param {Object} props - Propiedades del componente
 * @param {string} props.nombre - Nombre del producto
 * @param {number} props.precio - Precio del producto en euros
 * @param {string} props.imagen - URL de la imagen del producto
 * @param {string} [props.descripcion] - Descripción opcional del producto (no se muestra actualmente)
 * @returns {JSX.Element} Tarjeta de producto con imagen, nombre y precio formateado
 */
export default function ProductCard({ nombre, precio, imagen, descripcion }) {
  //* SI no formateo el precio el precio a euros no queda bien
  // Formatear el precio a euros
  // Usamos Intl.NumberFormat para formatear el número como moneda
  // 'es-ES' es el locale para español de España, y 'EUR' es la moneda Euro
  const precioFormateado = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(precio);

  return (
    /*Para moverse con el tabulador entre los productos te obliga a tabular 
    2 veces pra cambiar de producto, el problema se soluciona al eliminar el atributo 
    tabIndex="0" no se el porque (creo que es por el Link de ProductGrid).*/

    <article
      //tabIndex="0"
      className="product-card"
    >
      <div className="product-image-wrap">
        <img src={imagen} alt={nombre} className="product-image" />
      </div>
      <h3 className="product-name">{nombre}</h3>
      <p className="product-price">{precioFormateado}</p>
      {/* Descripción comentada para que no se muestre en el catalogo de productos*/}
      {/*<p className="product-description">{descripcion}</p>*/}
    </article>
  );
}
