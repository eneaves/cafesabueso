import { ADDRESS, HOURS, INSTAGRAM_URL, MAPS_URL, WHATSAPP_URL } from "../data/content";
import { ClockIcon, DogIcon, ExternalIcon, PinIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

  return (
    <footer className="site" id="ubicacion">
      <div className="wrap footer-grid">
        <div>
          <span className="logo" style={{ display: "inline-flex", alignItems: "center", gap: ".5rem" }}>
            <span className="logo-badge">
              <DogIcon />
            </span>
            <span className="logo-text">Café Sabueso</span>
          </span>
          <p className="foot-line" style={{ marginTop: "1rem" }}>
            Cafetería y espacio cultural autogestivo en constante construcción. Vendemos obra gráfica, bebidas
            artesanales y talleres.
          </p>
          <div className="foot-social">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              @cafesabueso
            </a>
          </div>
        </div>
        <div>
          <h3>Horario &amp; Ubicación</h3>
          <div className="foot-line">
            <ClockIcon />
            <span>{HOURS}</span>
          </div>
          <div className="foot-line">
            <PinIcon />
            <span>{ADDRESS}</span>
          </div>
          <div className="foot-line">
            <ExternalIcon />
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              Cómo llegar
            </a>
          </div>
        </div>
        <div>
          <h3>Mapa</h3>
          <div className="map-frame">
            <iframe title="Ubicación de Café Sabueso" src={mapEmbedSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </div>
      </div>
      <div className="wrap foot-bottom">
        <span>© {year} Café Sabueso · Chihuahua, México</span>
        <span>Hecho con cariño, cold brew y mucho papel reciclado.</span>
      </div>
    </footer>
  );
}
