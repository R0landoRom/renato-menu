import PedidoItem from "./PedidoItem";

function Pedido({ pedido, aumentar, disminuir, eliminar }) {
  const total = pedido.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <div className="pedido">
      <h3>Pedido</h3>

      {pedido.map((item) => (
        <PedidoItem
          key={item.id}
          item={item}
          aumentar={aumentar}
          disminuir={disminuir}
          eliminar={eliminar}
        />
      ))}

      <h4>Total: S/ {total}</h4>
    </div>
  );
}

export default Pedido;