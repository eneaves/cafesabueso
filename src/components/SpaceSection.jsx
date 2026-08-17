import { GALLERY } from "../data/content";
import { CheckIcon } from "./Icons";

const LIST_ITEMS = [
  "Foro para cine, música y actuación en vivo",
  "Mesa de materiales compartidos para journaling y encuadernación",
  "Consignación y venta de obra gráfica de artistas locales",
  "Club de Journal y Club de Lectura semanales",
];

export default function SpaceSection() {
  return (
    <section className="block" id="espacio">
      <div className="wrap">
        <div className="space-grid">
          <div className="space-copy">
            <span className="section-eyebrow">✳ Nuestra casa</span>
            <h2 className="section-title">El Espacio</h2>
            <p>
              Café Sabueso es cafetería, foro y taller a la vez: un espacio autogestivo en constante construcción, hecho
              por y para la comunidad creativa de Chihuahua.
            </p>
            <p>
              Pet friendly, con Wi-Fi gratis, juegos de mesa siempre disponibles y una pared rotativa de obra gráfica en
              consignación de artistas locales.
            </p>
            <ul className="space-list">
              {LIST_ITEMS.map((item) => (
                <li key={item}>
                  <CheckIcon /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="gallery">
            {GALLERY.map((src, i) => (
              <div className="g" key={i}>
                <img src={src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
