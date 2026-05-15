function Modal({ data, onClose }) {
  if (!data) return null;

  const enviarWhatsApp = () => {
    const mensaje = `
🧾 *BOLETA DE PEDIDO*

📌 Pedido: ${data.numero}
📅 Fecha: ${data.fecha}
🕒 Hora: ${data.hora}

👤 Cliente: ${data.nombre}
📱 Número: ${data.telefono}
📍 Dirección: ${data.direccion || "Ninguna"}
✨ Extras: ${data.extras || "Ninguno"}

🍔 PEDIDO:
${data.detalle}

💰 TOTAL: S/ ${data.total}
    `;

    // Reemplaza con tu número de WhatsApp
    const telefonoNegocio = "51927826632";

    const url = `https://wa.me/${telefonoNegocio}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>🧾 Boleta de Pedido</h2>

        <p><b>📌 N° Pedido:</b> {data.numero}</p>

        <p><b>📅 Fecha:</b> {data.fecha}</p>
        <p><b>🕒 Hora:</b> {data.hora}</p>

        <hr />

        <p><b>👤 Cliente:</b> {data.nombre}</p>
        <p><b>📱 Número:</b> {data.telefono}</p>

        <p><b>📍 Dirección:</b> {data.direccion || "Ninguna"}</p>
        <p><b>✨ Extras:</b> {data.extras || "Ninguno"}</p>

        <hr />

        <p><b>🍔 Pedido:</b></p>
        <pre>{data.detalle}</pre>

        <h3>💰 Total: S/ {data.total}</h3>

        <div className="botones-modal">

          <button onClick={enviarWhatsApp}>
            📲 Enviar por WhatsApp
          </button>

          <button onClick={onClose}>
            ❌ Cerrar
          </button>

        </div>

      </div>
    </div>
  );
}

export default Modal;