import { useState } from "react";
import { CATEGORY_TONE, formatEventDate, formatEventTime, googleCalendarUrl, ADDRESS } from "../data/content";
import { ClockIcon, HostIcon, PinIcon, CheckIcon, CalendarIcon, CloseIcon } from "./Icons";
import { useToast } from "../ToastContext";

export default function EventModal({ event, reservedCount, onReserve, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", people: reservedCount || 1 });
  const showToast = useToast();
  const isReserved = !!reservedCount;

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const people = Math.min(event.spots, Math.max(1, Number(form.people) || 1));
    onReserve(event.id, people);
    showToast("¡Lugar apartado!", `Te enviamos los detalles de "${event.title}" a tu correo y WhatsApp.`);
  };

  return (
    <div className="overlay" onClick={(ev) => ev.target === ev.currentTarget && onClose()}>
      <div className="modal modal-event" role="dialog" aria-modal="true">
        <button className="modal-close" aria-label="Cerrar" onClick={onClose}>
          <CloseIcon />
        </button>
        <div className="modal-media">
          <img src={event.image} alt="" />
        </div>
        <div className="modal-body">
          <span className={`pop-badge cat-pill ${CATEGORY_TONE[event.category]}`}>{event.category}</span>
          <h2>{event.title}</h2>
          <p className="desc">{event.description}</p>

          <div className="modal-meta">
            <div className="meta-row">
              <ClockIcon />
              {formatEventDate(event.start)} · {formatEventTime(event.start, event.end)}
            </div>
            <div className="meta-row">
              <HostIcon /> Imparte {event.host}
            </div>
            <div className="meta-row full">
              <PinIcon /> {ADDRESS}
            </div>
            <div className="modal-price-row">
              <strong>{event.price}</strong> · Cupo limitado: {event.spots} lugares
            </div>
          </div>

          <div className="includes-card">
            <h3>Incluye</h3>
            <ul>
              {event.includes.map((i) => (
                <li key={i}>
                  <CheckIcon /> {i}
                </li>
              ))}
            </ul>
          </div>

          <h3 className="reserve-heading font-display">Apartar lugar</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-row2">
                <div className="form-field">
                  <label htmlFor="rName">Nombre</label>
                  <input id="rName" type="text" placeholder="Tu nombre" required value={form.name} onChange={update("name")} />
                </div>
                <div className="form-field">
                  <label htmlFor="rEmail">Correo</label>
                  <input
                    id="rEmail"
                    type="email"
                    placeholder="hola@correo.com"
                    required
                    value={form.email}
                    onChange={update("email")}
                  />
                </div>
              </div>
              <div className="form-row2">
                <div className="form-field">
                  <label htmlFor="rWhatsapp">WhatsApp</label>
                  <input
                    id="rWhatsapp"
                    type="text"
                    placeholder="614 123 4567"
                    required
                    value={form.whatsapp}
                    onChange={update("whatsapp")}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="rPeople">Número de asistentes</label>
                  <input
                    id="rPeople"
                    type="number"
                    min="1"
                    max={event.spots}
                    value={form.people}
                    onChange={update("people")}
                  />
                </div>
              </div>
            </div>
            <div className="reserve-actions">
              {isReserved ? (
                <span className="rsvp-confirmed">✓ ¡Lugar apartado para {reservedCount}!</span>
              ) : (
                <button type="submit" className="btn btn-pop">
                  Apartar Lugar / RSVP
                </button>
              )}
              <a className="btn btn-outline" href={googleCalendarUrl(event)} target="_blank" rel="noopener noreferrer">
                <CalendarIcon /> Añadir a Google Calendar / iCal
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
