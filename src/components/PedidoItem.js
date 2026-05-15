function PedidoItem({ item, aumentar, disminuir, eliminar }) {
  return (
    <div className="pedido-item">
      <div className="pedido-info">{item.nombre}</div>

      <div className="pedido-precio">S/ {item.precio}</div>

      <div className="pedido-controles">
        <button onClick={() => disminuir(item.id)}>-</button>
        <span>{item.cantidad}</span>
        <button onClick={() => aumentar(item.id)}>+</button>
      </div>

      <div className="pedido-eliminar">
        <button onClick={() => eliminar(item.id)}>❌</button>
      </div>
    </div>
  );
}

export default PedidoItem;