import { PHOTOS } from "../data/content";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Chihuahua, Centro · Desde 2021</span>
          <h1>
            Café, Arte &amp; Comunidad Creativa en <span className="hl">Chihuahua</span>
          </h1>
          <p className="subtitle">
            Un espacio seguro para sentir y descubrirnos en colectivo. Ven por un cold brew, únete al Club de Journal o
            disfruta nuestros juegos de mesa.
          </p>
          <ul className="badge-row">
            <li className="pop-badge tone-sky">Pet Friendly</li>
            <li className="pop-badge tone-bubblegum">Obra Gráfica &amp; Talleres</li>
            <li className="pop-badge tone-primary">Juegos de Mesa</li>
            <li className="pop-badge tone-card">Free Wi-Fi</li>
            <li className="pop-badge tone-tomato">Espacio Cultural Autogestivo</li>
          </ul>
          <p className="hero-quote">
            "Cafetería y espacio cultural autogestivo en constante construcción. Vendemos obra gráfica, bebidas
            artesanales y talleres."
          </p>
        </div>
        <div className="hero-art">
          <div className="hero-art-frame">
            <img src={PHOTOS.heroInterior} alt="Interior de Café Sabueso con mesas de madera, plantas y obra gráfica en las paredes" loading="lazy" />
          </div>
          <span className="sticker">Cold brew del día</span>
          <span className="sticker sticker-2">Piso 2: zona tranquila</span>
        </div>
      </div>
    </section>
  );
}
