import { useMemo, useState } from "react";
import { CATEGORIES, EVENTS, formatEventDate } from "../data/content";
import { SearchIcon } from "./Icons";
import EventModal from "./EventModal";

export default function EventsSection({ reserved, onReserve }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("todas");
  const [date, setDate] = useState("");
  const [activeEvent, setActiveEvent] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return EVENTS.filter((e) => {
      const matchQ = !q || [e.title, e.host, e.short, e.description].join(" ").toLowerCase().includes(q);
      const matchCat = category === "todas" || e.category === category;
      const matchDate = !date || e.start.slice(0, 10) === date;
      return matchQ && matchCat && matchDate;
    });
  }, [query, category, date]);

  return (
    <section className="block" id="eventos">
      <div className="wrap">
        <div className="section-head">
          <div>
            <h2 className="section-title">Talleres y Eventos</h2>
            <p className="section-desc">
              Aparta tu lugar en segundos. Te llega la confirmación por correo y WhatsApp, más el enlace para agregarlo a
              tu calendario.
            </p>
          </div>
        </div>

        <div className="filters">
          <div className="field">
            <SearchIcon />
            <input
              type="text"
              placeholder="Buscar por nombre, host o descripción…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="field">
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="todas">Todas las categorías</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="empty-state">
            No encontramos talleres con esos filtros. Prueba con otra búsqueda o quita el filtro de fecha.
          </div>
        ) : (
          <div className="events-grid">
            {filtered.map((e) => (
              <button key={e.id} type="button" className="event-card" onClick={() => setActiveEvent(e)}>
                <div className="event-thumb">
                  <img src={e.image} alt="" loading="lazy" />
                  <span className="event-cat-badge">{e.category}</span>
                </div>
                <div className="event-body">
                  <span className="event-date">{formatEventDate(e.start)}</span>
                  <h3 className="event-title">{e.title}</h3>
                  <p className="event-short">{e.short}</p>
                  <div className="event-meta">
                    <span className="event-price">{e.price}</span>
                    {reserved[e.id] ? (
                      <span className="reserved-pill">Apartado ×{reserved[e.id]}</span>
                    ) : (
                      <span className="event-spots">{e.spots} lugares</span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {activeEvent && (
        <EventModal
          event={activeEvent}
          reservedCount={reserved[activeEvent.id]}
          onReserve={onReserve}
          onClose={() => setActiveEvent(null)}
        />
      )}
    </section>
  );
}
