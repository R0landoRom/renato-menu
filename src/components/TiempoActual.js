import React, { useState, useEffect } from 'react';

const TiempoActual = () => {
  const [fecha, setFecha] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setFecha(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatoDobleDigito = (num) => (num < 10 ? `0${num}` : num);

  const hora = formatoDobleDigito(fecha.getHours());
  const min = formatoDobleDigito(fecha.getMinutes());
  const seg = formatoDobleDigito(fecha.getSeconds());

  const opcionesFecha = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

  const fechaTexto = fecha.toLocaleDateString('es-PE', opcionesFecha);

  return (
    <div className="reloj-barra">
      <div className="reloj-fecha">
        Fecha: {fechaTexto}
      </div>
      <div className="reloj-hora">
        Hora: {hora}:{min}:{seg}
      </div>
    </div>
  );
};

export default TiempoActual;