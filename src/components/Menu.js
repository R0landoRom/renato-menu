function Menu({ productos, agregar }) {
  return (
    <div className="menu">
      <h3 className="titulo">Menú</h3>

      {productos.map((prod) => (
        <div key={prod.id} className="card">

          {/* Imagen */}
          <img src={prod.imagen} alt={prod.nombre} />

          {/* Info */}
          <h4>{prod.nombre}</h4>
          <p>S/ {prod.precio}</p>

          {/* Acción */}
          <button onClick={() => agregar(prod)}>
            Agregar
          </button>

        </div>
      ))}
    </div>
  );
}

export default Menu;