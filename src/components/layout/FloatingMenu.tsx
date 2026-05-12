import { useState, useEffect } from "react";
import { MessageCircle, Home, MapPin, Calendar, Plus, X } from "lucide-react";

export function FloatingMenu() {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsOpen(false);
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-[100] transition-all duration-500 md:right-auto md:bottom-8 md:left-1/2 md:-translate-x-1/2 ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-20 opacity-0"
      }`}
    >
      <div className="flex md:hidden flex-col items-end gap-3">
        {isOpen && (
          <div className="flex flex-col items-end gap-3 pb-2">
            <a href="#localizacao" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
              <span className="rounded-md bg-[#304439]/90 px-3 py-1 font-sans text-xs font-semibold text-[#FFD2A2] opacity-0 transition-opacity duration-300 group-hover:opacity-100">Localização</span>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#304439] text-[#FFD2A2] shadow-lg">
                <MapPin className="h-5 w-5" />
              </div>
            </a>
            <a href="https://airbnb.com" target="_blank" rel="noreferrer" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
              <span className="rounded-md bg-[#304439]/90 px-3 py-1 font-sans text-xs font-semibold text-[#FFD2A2] opacity-0 transition-opacity duration-300 group-hover:opacity-100">Airbnb</span>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#304439] text-[#FFD2A2] shadow-lg">
                <Home className="h-5 w-5" />
              </div>
            </a>
            <a href="https://booking.com" target="_blank" rel="noreferrer" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
              <span className="rounded-md bg-[#304439]/90 px-3 py-1 font-sans text-xs font-semibold text-[#FFD2A2] opacity-0 transition-opacity duration-300 group-hover:opacity-100">Booking</span>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#304439] text-[#FFD2A2] shadow-lg">
                <Calendar className="h-5 w-5" />
              </div>
            </a>
            <a href="#contato" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
              <span className="rounded-md bg-[#FFD2A2]/90 px-3 py-1 font-sans text-xs font-bold text-[#304439] opacity-0 transition-opacity duration-300 group-hover:opacity-100">Contato</span>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD2A2] text-[#304439] shadow-lg">
                <MessageCircle className="h-5 w-5" />
              </div>
            </a>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFD2A2] text-[#304439] shadow-2xl transition-transform duration-300 active:scale-95"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
        </button>
      </div>

      <div className="hidden md:flex items-center divide-x divide-[#FFD2A2]/20 overflow-hidden rounded-2xl border border-[#304439]/20 bg-[#304439]/90 shadow-2xl backdrop-blur-md">
        <a href="#localizacao" className="px-8 py-4 font-sans text-sm font-medium text-[#FFD2A2] transition hover:bg-[#FFD2A2]/10">
          Localização
        </a>
        <a href="https://airbnb.com" target="_blank" rel="noreferrer" className="px-8 py-4 font-sans text-sm font-medium text-[#FFD2A2] transition hover:bg-[#FFD2A2]/10">
          Airbnb
        </a>
        <a href="https://booking.com" target="_blank" rel="noreferrer" className="px-8 py-4 font-sans text-sm font-medium text-[#FFD2A2] transition hover:bg-[#FFD2A2]/10">
          Booking
        </a>
        <a href="#contato" className="bg-[#FFD2A2] px-8 py-4 font-sans text-sm font-bold text-[#304439] transition hover:brightness-110">
          Contato Direto
        </a>
      </div>
    </div>
  );
}