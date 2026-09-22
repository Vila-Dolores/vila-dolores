import { Instagram, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../common/LanguageSwitcher";

const baseUrl = import.meta.env.VITE_URL_CLOUDFLARE;

const WHATSAPP_NUMBER = "5511940891848";

const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Vila Dolores e gostaria de saber mais sobre as hospedagens.";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

const INSTAGRAM_URL = "https://ig.me/m/viladolores.juquehy";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      className="w-full bg-[#304439] px-8 pt-10 pb-6 font-sans md:px-16"
      id="contato"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 border-b border-[#FFD2A2]/20 pb-8 md:flex-row md:items-start">
        {/* Logo */}
        <div className="flex h-44 w-44 shrink-0 items-center justify-center bg-[#FFD2A2] p-4 shadow-lg">
          <img
            src={`${baseUrl}/brand/logo-original.webp`}
            alt="Vila Dolores Logo"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Informações */}
        <div className="flex max-w-lg flex-col items-center gap-5 text-center md:pt-4">
          <p className="font-sans text-sm font-medium leading-relaxed text-[#FFD2A2]/90">
            {t("common.footer.description")}
          </p>

          <div className="h-px w-16 bg-[#FFD2A2]/30" />

          <address className="whitespace-pre-line font-sans text-sm font-medium not-italic text-[#FFD2A2]/70">
            {t("common.footer.address")}
          </address>
        </div>

        {/* Navegação */}
        <div className="flex flex-col items-center gap-6 md:items-end">
          <nav className="flex flex-col items-center gap-3 md:items-end">
            <a
              href="/#localizacao"
              className="font-sans text-sm font-bold tracking-wide text-[#FFD2A2] transition hover:text-white"
            >
              {t("common.navigation.location")}
            </a>

            <a
              href="https://airbnb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-bold tracking-wide text-[#FFD2A2] transition hover:text-white"
            >
              {t("common.navigation.airbnb")}
            </a>

            <a
              href="https://booking.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-bold tracking-wide text-[#FFD2A2] transition hover:text-white"
            >
              {t("common.navigation.booking")}
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-sans text-sm font-bold tracking-wide text-[#FFD2A2] transition hover:text-white"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-sans text-sm font-bold tracking-wide text-[#FFD2A2] transition hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
              {t("common.navigation.contact")}
            </a>
          </nav>

          <div className="mt-2">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-7xl justify-center">
        <p className="font-sans text-xs text-[#FFD2A2]/50">
          {t("common.footer.rights", {
            year: new Date().getFullYear(),
          })}
        </p>
      </div>
    </footer>
  );
}