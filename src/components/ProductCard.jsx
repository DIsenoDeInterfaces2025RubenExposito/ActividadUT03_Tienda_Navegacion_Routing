function ProductCard({ nombre, precio, imagen, descripcion }) {

  //* SI no formate el precio el precio a euros no queda bien
  // Formatear el precio a euros
  // Usamos Intl.NumberFormat para formatear el número como moneda
  // 'es-ES' es el locale para español de España, y 'EUR' es la moneda Euro
  const precioFormateado = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  }).format(precio);

  return (
    <article 
    tabIndex="0" 
    className="product-card"
    >
      <div className="product-image-wrap">
        <img src={imagen} alt={nombre} className="product-image" />
      </div>
      <h3 className="product-name">{nombre}</h3>
      {descripcion && <p className="product-description">{descripcion}</p>}
      <p className="product-price">{precioFormateado}</p>
    </article>
  );
}

export default ProductCard;