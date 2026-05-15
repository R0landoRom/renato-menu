import { useState } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Pedido from "./components/Pedido";
import ClienteForm from "./components/ClienteForm";
import Modal from "./components/Modal";
import TiempoActual from "./components/TiempoActual";
import productos from "./data/productos.json";
import "./App.css";

function App() {
  const [pedido, setPedido] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [numeroPedido, setNumeroPedido] = useState(1); // 🔥 contador

  const agregar = (producto) => {
    const existe = pedido.find((p) => p.id === producto.id);

    if (existe) {
      setPedido(
        pedido.map((p) =>
          p.id === producto.id
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        )
      );
    } else {
      setPedido([...pedido, { ...producto, cantidad: 1 }]);
    }
  };

  const aumentar = (id) => {
    setPedido(
      pedido.map((p) =>
        p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p
      )
    );
  };

  const disminuir = (id) => {
    setPedido(
      pedido
        .map((p) =>
          p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p
        )
        .filter((p) => p.cantidad > 0)
    );
  };

  const eliminar = (id) => {
    setPedido(pedido.filter((p) => p.id !== id));
  };

  // 🔥 FUNCIÓN PAGAR COMPLETA
  const pagar = (cliente) => {
    if (pedido.length === 0) return;

    const ahora = new Date();

    const fecha = ahora.toLocaleDateString("es-PE", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    });

    const hora = ahora.toLocaleTimeString("es-PE");

    const detalle = pedido
      .map((p) => `${p.nombre} x${p.cantidad}`)
      .join("\n");

    const total = pedido.reduce(
      (acc, p) => acc + p.precio * p.cantidad,
      0
    );

    // 🔥 FORMATO #001
    const numeroFormateado = `#${String(numeroPedido).padStart(3, "0")}`;

    setModalData({
      ...cliente,
      detalle,
      total,
      fecha,
      hora,
      numero: numeroFormateado
    });

    setNumeroPedido(numeroPedido + 1); // incrementa
    setPedido([]);
  };

  return (
    <div>
      <TiempoActual />

      <Navbar />

      <div className="container">
        <Menu productos={productos} agregar={agregar} />

        <div className="panel-derecha">
          <Pedido
            pedido={pedido}
            aumentar={aumentar}
            disminuir={disminuir}
            eliminar={eliminar}
          />

          <ClienteForm onConfirmar={pagar} />
        </div>
      </div>

      <Modal data={modalData} onClose={() => setModalData(null)} />
    </div>
  );
}

export default App;