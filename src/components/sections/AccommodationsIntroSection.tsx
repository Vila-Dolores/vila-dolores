const baseUrl = import.meta.env.VITE_URL_CLOUDFLARE;
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export function AccommodationsIntroSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#FFD2A2] py-24 font-sans">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-0 px-8 md:flex-row md:px-16">
        <div className="relative h-[400px] w-full flex-1 overflow-hidden shadow-2xl md:h-[550px]">
          <img
            src={`${baseUrl}/area-externa/entrada-longe.webp`}
            alt="Facilidades das acomodações"
            className="h-full w-full object-cover"
          />
        </div>
        
        <div className="z-10 flex w-full flex-1 flex-col items-start justify-center bg-[#FAF9F6] p-10 shadow-xl md:-ml-16 md:p-16">
          <h2 className="mb-6 font-sans text-2xl font-extrabold tracking-tight text-[#304439] md:text-3xl">
            {t("accommodations_intro.title")}
          </h2>
          <p className="mb-10 font-sans text-base font-medium leading-relaxed text-[#304439]/90">
            {t("accommodations_intro.description")}
          </p>
          
          <Link
            to="/acomodacoes"
            className="flex items-center gap-3 rounded-full bg-[#304439] px-8 py-4 text-sm font-bold text-[#FFD2A2] shadow-xl transition-all hover:scale-105 hover:bg-[#202d26]"
          >
            {t("common.navigation.accommodations")}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}