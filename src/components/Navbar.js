import { useEffect, useState } from "react";

function Navbar() {
  // Lista de imágenes del banner
  const banners = [
    "/img/ban1.webp",
    "/img/ban2.webp",
    "/img/ban3.webp",
    "/img/ban4.webp"
  ];

  // Estado que controla la imagen actual
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Cambia imagen cada 3 segundos
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="navbar">
      <div className="carousel">
        {/* Imagen dinámica */}
        <img
          src={banners[index]}
          alt="banner"
          className="fade"
        />

        {/* Texto encima */}
        <div className="overlay">
          <h2>Renato´s Menu</h2>
          <p> 🍽️ Sabor casero, ingredientes frescos y el mejor menú al mejor precio. 😋</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;