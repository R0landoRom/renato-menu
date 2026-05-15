import { useState } from "react";

function ClienteForm({ onConfirmar }) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    direccion: "",
    extras: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirmar(form);
  };

  return (
    <form onSubmit={handleSubmit} className="form-cliente">
      <h3>Datos del Cliente</h3>

      <input
        name="nombre"
        placeholder="Nombre"
        onChange={handleChange}
        required
      />

      <input
        name="telefono"
        placeholder="N° del Cliente"
        onChange={handleChange}
        required
      />

      <textarea
        name="direccion"
        placeholder="Dirección (cargos extras por distancia)"
        onChange={handleChange}
      />

      <input
        name="extras"
        placeholder="Extras"
        onChange={handleChange}
      />

      <button type="submit">Pagar</button>
    </form>
  );
}

export default ClienteForm;