import { useTranslation } from "react-i18next";

export function LocationSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white py-24 font-sans" id="localizacao">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-8 md:flex-row md:items-center md:px-16">
        <div className="flex flex-1 flex-col justify-center p-4 md:p-8">
          <h2 className="mb-6 font-sans text-3xl font-extrabold tracking-tight text-[#304439] md:text-4xl">
            {t("location.title")}
          </h2>
          <p className="mb-4 font-sans text-lg font-medium leading-relaxed text-[#304439]/90">
            {t("location.description_1")}
          </p>
          <p className="font-sans text-lg font-medium leading-relaxed text-[#304439]/90">
            {t("location.description_2")}
          </p>
        </div>

        <div className="relative h-[400px] w-full flex-1 overflow-hidden rounded-xl shadow-2xl md:h-[500px]">
          <iframe
            title="Mapa de Localização Vila Dolores"
            src="https://maps.google.com/maps?q=Av.%20Jo%C3%A3o%20Luiz%20Faustino,%20420%20-%20Juquehy,%20S%C3%A3o%20Sebasti%C3%A3o%20-%20SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}