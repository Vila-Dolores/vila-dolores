import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center justify-center gap-4 py-2">
      <button
        type="button"
        onClick={() => changeLanguage("pt")}
        className={`h-5 w-7 overflow-hidden rounded-sm transition hover:scale-110 ${i18n.language === "pt" ? "opacity-100 ring-2 ring-[#FFD2A2] ring-offset-1 ring-offset-[#304439]" : "opacity-50"}`}
        aria-label="Português"
      >
        <img src="https://flagcdn.com/br.svg" alt="Brasil" className="h-full w-full object-cover" />
      </button>

      <button
        type="button"
        onClick={() => changeLanguage("en")}
        className={`h-5 w-7 overflow-hidden rounded-sm transition hover:scale-110 ${i18n.language === "en" ? "opacity-100 ring-2 ring-[#FFD2A2] ring-offset-1 ring-offset-[#304439]" : "opacity-50"}`}
        aria-label="English"
      >
        <img src="https://flagcdn.com/us.svg" alt="Estados Unidos" className="h-full w-full object-cover" />
      </button>

      <button
        type="button"
        onClick={() => changeLanguage("es")}
        className={`h-5 w-7 overflow-hidden rounded-sm transition hover:scale-110 ${i18n.language === "es" ? "opacity-100 ring-2 ring-[#FFD2A2] ring-offset-1 ring-offset-[#304439]" : "opacity-50"}`}
        aria-label="Español"
      >
        <img src="https://flagcdn.com/es.svg" alt="España" className="h-full w-full object-cover" />
      </button>
    </div>
  );
}