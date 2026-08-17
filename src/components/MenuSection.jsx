import { useState } from "react";
import { MENU } from "../data/content";

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState(MENU[0].id);
  const section = MENU.find((s) => s.id === activeTab);

  return (
    <section className="block" id="menu">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="section-eyebrow">Hecho en casa</span>
            <h2 className="section-title">Carta / Menú</h2>
            <p className="section-desc">Bebidas artesanales, repostería del día y combos pensados para quedarte a crear.</p>
          </div>
        </div>
        <div className="tabs">
          {MENU.map((s) => (
            <button
              key={s.id}
              type="button"
              className={`tab-btn${s.id === activeTab ? " active" : ""}`}
              onClick={() => setActiveTab(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>
        <div className="menu-grid">
          {section.items.map((it) => (
            <div className="menu-item" key={it.name}>
              <div>
                <div className="menu-item-name">
                  {it.name} {it.tag && <span className="tag-pill">{it.tag}</span>}
                </div>
                <div className="menu-item-desc">{it.desc}</div>
              </div>
              <div className="menu-item-price">{it.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
