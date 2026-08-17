import { useState } from "react";
import { CATEGORIES } from "../data/content";
import { CloseIcon } from "./Icons";
import { useToast } from "../ToastContext";

const EMPTY = { name: "", category: CATEGORIES[0], date: "", host: "", contact: "", desc: "" };

export default function ProposeModal({ onClose }) {
  const [form, setForm] = useState(EMPTY);
  const showToast = useToast();

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = form.name || "tu propuesta";
    onClose();
    showToast("¡Propuesta enviada!", `Recibimos "${name}". Te contactamos pronto para agendarla.`);
    setForm(EMPTY);
  };

  return (
    <div className="overlay" onClick={(ev) => ev.target === ev.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true">
        <button className="modal-close" aria-label="Cerrar" onClick={onClose}>
          <CloseIcon />
        </button>
        <span className="section-eyebrow">✳ Súmate a la agenda</span>
        <h2>Proponer Taller / Evento</h2>
        <p className="desc" style={{ marginTop: ".4rem" }}>
          Cuéntanos tu idea y te contactamos para agendarla en Café Sabueso.
        </p>
        <form className="form-grid" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="pName">Nombre del taller o evento</label>
            <input
              id="pName"
              type="text"
              placeholder="Ej. Círculo de acuarela nocturna"
              required
              value={form.name}
              onChange={update("name")}
            />
          </div>
          <div className="form-row2">
            <div className="form-field">
              <label htmlFor="pCategory">Categoría</label>
              <select id="pCategory" value={form.category} onChange={update("category")}>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="pDate">Fecha tentativa</label>
              <input id="pDate" type="date" value={form.date} onChange={update("date")} />
            </div>
          </div>
          <div className="form-row2">
            <div className="form-field">
              <label htmlFor="pHost">Tu nombre</label>
              <input
                id="pHost"
                type="text"
                placeholder="¿Quién lo propone?"
                required
                value={form.host}
                onChange={update("host")}
              />
            </div>
            <div className="form-field">
              <label htmlFor="pContact">WhatsApp o correo</label>
              <input
                id="pContact"
                type="text"
                placeholder="Para contactarte"
                required
                value={form.contact}
                onChange={update("contact")}
              />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="pDesc">Cuéntanos de qué se trata</label>
            <textarea
              id="pDesc"
              placeholder="Dinámica, materiales, cupo aproximado…"
              value={form.desc}
              onChange={update("desc")}
            />
          </div>
          <button type="submit" className="btn btn-pop" style={{ width: "100%", marginTop: ".3rem" }}>
            Enviar propuesta
          </button>
        </form>
      </div>
    </div>
  );
}
