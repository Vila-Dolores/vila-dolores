import { useTranslation } from "react-i18next";

export function AccommodationsIntroSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#FFD2A2] py-24 font-sans">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-0 px-8 md:flex-row md:px-16">
        <div className="relative h-[400px] w-full flex-1 overflow-hidden shadow-2xl md:h-[550px]">
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80"
            alt="Facilidades das acomodações"
            className="h-full w-full object-cover"
          />
        </div>
        
        <div className="z-10 flex w-full flex-1 flex-col justify-center bg-[#FAF9F6] p-10 shadow-xl md:-ml-16 md:p-16">
          <h2 className="mb-6 font-sans text-2xl font-extrabold tracking-tight text-[#304439] md:text-3xl">
            {t("accommodations_intro.title")}
          </h2>
          <p className="font-sans text-base font-medium leading-relaxed text-[#304439]/90">
            {t("accommodations_intro.description")}
          </p>
        </div>
      </div>
    </section>
  );
}