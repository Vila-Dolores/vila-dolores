import { useState, useEffect } from "react";

export function FloatingMenu() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
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
      className={`fixed bottom-8 left-1/2 z-[100] flex -translate-x-1/2 items-center divide-x divide-[#FFD2A2]/20 overflow-hidden rounded-2xl border border-[#304439]/20 bg-[#304439]/90 shadow-2xl backdrop-blur-md transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-20 opacity-0"
      }`}
    >
      <button
        type="button"
        className="px-8 py-4 font-sans text-sm font-medium text-[#FFD2A2] transition hover:bg-[#FFD2A2]/10"
      >
        Localização
      </button>
      <button
        type="button"
        className="px-8 py-4 font-sans text-sm font-medium text-[#FFD2A2] transition hover:bg-[#FFD2A2]/10"
      >
        Airbnb
      </button>
      <button
        type="button"
        className="px-8 py-4 font-sans text-sm font-medium text-[#FFD2A2] transition hover:bg-[#FFD2A2]/10"
      >
        Booking
      </button>
      <button
        type="button"
        className="bg-[#FFD2A2] px-8 py-4 font-sans text-sm font-bold text-[#304439] transition hover:brightness-110"
      >
        Contato Direto
      </button>
    </div>
  );
}