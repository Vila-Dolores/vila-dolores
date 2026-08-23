const baseUrl = import.meta.env.VITE_URL_CLOUDFLARE;
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../common/LanguageSwitcher";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      className="w-full bg-[#304439] px-8 py-12 font-sans md:px-16"
      id="contato"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 border-b border-[#FFD2A2]/20 pb-12 md:flex-row md:items-start">
        <div className="flex h-32 w-32 shrink-0 items-center justify-center bg-[#FFD2A2] p-4 shadow-lg">
          <img
            src={`${baseUrl}/brand/logo-original.webp`}
            alt="Vila Dolores Logo"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="flex max-w-lg flex-col items-center gap-6 text-center md:items-center">
          <p className="font-sans text-sm font-medium leading-relaxed text-[#FFD2A2]/90">
            {t("common.footer.description")}
          </p>
          <div className="h-px w-16 bg-[#FFD2A2]/30" />
          <address className="font-sans text-sm font-medium not-italic text-[#FFD2A2]/70 whitespace-pre-line">
            {t("common.footer.address")}
          </address>
        </div>

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
              rel="noreferrer"
              className="font-sans text-sm font-bold tracking-wide text-[#FFD2A2] transition hover:text-white"
            >
              {t("common.navigation.airbnb")}
            </a>
            <a
              href="https://booking.com"
              target="_blank"
              rel="noreferrer"
              className="font-sans text-sm font-bold tracking-wide text-[#FFD2A2] transition hover:text-white"
            >
              {t("common.navigation.booking")}
            </a>
            <a
              href="#contato"
              className="font-sans text-sm font-bold tracking-wide text-[#FFD2A2] transition hover:text-white"
            >
              {t("common.navigation.contact")}
            </a>
          </nav>

          <div className="mt-2">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl justify-center">
        <p className="font-sans text-xs text-[#FFD2A2]/50">
          {t("common.footer.rights", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
