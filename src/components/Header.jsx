import { useState } from "react";
import { DogIcon, PlusIcon, StarIcon, BurgerIcon } from "./Icons";

const NAV_LINKS = [
  { href: "#eventos", label: "Talleres y Eventos" },
  { href: "#menu", label: "Carta / Menú" },
  { href: "#espacio", label: "El Espacio" },
  { href: "#ubicacion", label: "Ubicación" },
];

export default function Header({ onOpenPropose }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site" id="top">
      <div className="header-inner">
        <a href="#top" className="logo">
          <span className="logo-badge">
            <DogIcon />
          </span>
          <span className="logo-text">Café Sabueso</span>
        </a>
        <nav className="main-nav">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="btn btn-pop" onClick={onOpenPropose}>
            <PlusIcon />
            Proponer Taller / Evento
          </button>
          <a href="#eventos" className="btn btn-outline">
            <StarIcon />
            Ver Eventos
          </a>
          <button className="btn btn-ghost burger" aria-label="Abrir menú" onClick={() => setMenuOpen((o) => !o)}>
            <BurgerIcon />
          </button>
        </div>
      </div>
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
        <button
          className="btn btn-pop btn-sm"
          style={{ marginTop: ".6rem", width: "100%" }}
          onClick={() => {
            setMenuOpen(false);
            onOpenPropose();
          }}
        >
          + Proponer Taller / Evento
        </button>
      </div>
    </header>
  );
}
