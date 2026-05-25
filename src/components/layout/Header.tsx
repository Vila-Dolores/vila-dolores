import { X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../common/LanguageSwitcher";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      if (currentScrollY <= lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 z-50 flex w-full items-start justify-between px-6 py-6 transition-transform duration-500 ease-in-out md:absolute md:px-8 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      onMouseEnter={() => setIsVisible(true)}
    >
      <div className="relative" ref={menuRef}>
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
              {t("common.navigation.home")}
            </Link>
            <Link
              to="/acomodacoes"
              className="font-sans text-sm font-semibold text-[#FFD2A2]"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("common.navigation.accommodations")}
            </Link>
            <div className="h-px w-full bg-white/10" />
            <a
              href="/#localizacao"
              className="font-sans text-sm font-medium text-white/90"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("common.navigation.location")}
            </a>
            <a
              href="https://airbnb.com"
              target="_blank"
              rel="noreferrer"
              className="font-sans text-sm font-medium text-white/90"
            >
              {t("common.navigation.airbnb")}
            </a>
            <a
              href="https://booking.com"
              target="_blank"
              rel="noreferrer"
              className="font-sans text-sm font-medium text-white/90"
            >
              {t("common.navigation.booking")}
            </a>
            <a
              href="/#contato"
              className="mt-2 rounded-md bg-[#FFD2A2] px-4 py-2 text-center font-sans text-sm font-bold text-[#304439]"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("common.navigation.contact")}
            </a>
            
            <div className="my-1 h-px w-full bg-white/10" />
            <LanguageSwitcher />
          </nav>
        )}
      </div>

      <div className="flex h-20 w-32 max-w-full items-center justify-center md:absolute md:left-1/2 md:top-0 md:h-32 md:w-48 md:-translate-x-1/2 md:translate-y-4 lg:h-48 lg:w-64">
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
        {t("common.buttons.reserve")}
      </Link>
    </header>
  );
}