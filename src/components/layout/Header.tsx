import { X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 flex w-full items-start justify-between px-6 py-6 md:absolute md:top-0 md:px-8">
      <div className="relative">
        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 transition hover:opacity-80"
        >
          {isMenuOpen ? (
            <X className="h-8 w-8 text-white" />
          ) : (
            <>
              <span className="h-0.5 w-6 bg-white" />
              <span className="h-0.5 w-6 bg-white" />
              <span className="h-0.5 w-6 bg-white" />
            </>
          )}
        </button>

        {isMenuOpen && (
          <nav className="absolute left-0 top-12 flex w-56 flex-col gap-4 rounded-xl border border-white/20 bg-[#304439]/95 p-6 shadow-2xl backdrop-blur-md">
            <Link
              to="/"
              className="font-sans text-sm font-semibold text-[#FFD2A2]"
              onClick={() => setIsMenuOpen(false)}
            >
              Página Inicial
            </Link>
            <Link
              to="/acomodacoes"
              className="font-sans text-sm font-semibold text-[#FFD2A2]"
              onClick={() => setIsMenuOpen(false)}
            >
              Nossas Acomodações
            </Link>
            <div className="h-px w-full bg-white/10" />
            <a
              href="/#localizacao"
              className="font-sans text-sm font-medium text-white/90"
              onClick={() => setIsMenuOpen(false)}
            >
              Localização
            </a>
            <a
              href="https://airbnb.com"
              target="_blank"
              rel="noreferrer"
              className="font-sans text-sm font-medium text-white/90"
            >
              Airbnb
            </a>
            <a
              href="https://booking.com"
              target="_blank"
              rel="noreferrer"
              className="font-sans text-sm font-medium text-white/90"
            >
              Booking
            </a>
            <a
              href="/#contato"
              className="mt-2 rounded-md bg-[#FFD2A2] px-4 py-2 text-center font-sans text-sm font-bold text-[#304439]"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato Direto
            </a>
          </nav>
        )}
      </div>

      <div className="md:absolute md:left-1/2 md:top-0 md:-translate-x-1/2 md:translate-y-4 flex h-20 w-32 items-center justify-center max-w-full md:h-32 md:w-48 lg:h-48 lg:w-64">
        <Link to="/" className="block h-full w-full transition hover:opacity-80">
          <img
            src="/logo-original.png"
            alt="Vila Dolores"
            className="h-full w-full object-contain"
          />
        </Link>
      </div>

      <Link
        to="/acomodacoes"
        className="rounded-md bg-[#FFD2A2] px-4 py-2 font-sans text-xs font-bold text-[#304439] transition hover:brightness-110 md:px-6 md:py-3 md:text-sm"
      >
        Reserve Já
      </Link>
    </header>
  );
}