import { useState } from "react";
import { ToastProvider } from "./ToastContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EventsSection from "./components/EventsSection";
import MenuSection from "./components/MenuSection";
import SpaceSection from "./components/SpaceSection";
import Footer from "./components/Footer";
import ProposeModal from "./components/ProposeModal";

export default function App() {
  const [reserved, setReserved] = useState({});
  const [proposeOpen, setProposeOpen] = useState(false);

  const handleReserve = (eventId, count) => {
    setReserved((prev) => ({ ...prev, [eventId]: count }));
  };

  return (
    <ToastProvider>
      <div className="demo-banner">
        <strong>Demo</strong> — sitio de muestra para Café Sabueso, hecho con React.
      </div>
      <Header onOpenPropose={() => setProposeOpen(true)} />
      <main>
        <Hero />
        <EventsSection reserved={reserved} onReserve={handleReserve} />
        <MenuSection />
        <SpaceSection />
      </main>
      <Footer />
      {proposeOpen && <ProposeModal onClose={() => setProposeOpen(false)} />}
    </ToastProvider>
  );
}
