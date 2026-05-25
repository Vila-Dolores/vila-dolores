import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#304439] py-24 font-sans">
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-8 md:px-16">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative h-[400px] w-full overflow-hidden rounded-xl md:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1000&q=80"
              alt="House Apartments"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 font-sans text-3xl font-extrabold tracking-tight text-[#FFD2A2] md:text-4xl">
              {t("about.title")}
            </h2>
            <p className="mb-4 font-sans text-lg font-medium leading-relaxed text-white/80">
              {t("about.desc_1")}
            </p>
            <p className="mb-6 font-sans text-lg font-medium leading-relaxed text-white/80">
              {t("about.desc_2")}
            </p>
            <p className="font-sans text-lg font-bold text-[#FFD2A2]">
              {t("about.desc_3")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="order-2 flex flex-col justify-center rounded-xl bg-[#FFD2A2] p-10 md:order-1 md:p-14">
            <h2 className="mb-6 font-sans text-3xl font-extrabold tracking-tight text-[#304439] md:text-4xl">
              {t("about.beach_title")}
            </h2>
            <p className="mb-4 font-sans text-lg font-medium leading-relaxed text-[#304439]/90">
              {t("about.beach_desc_1")}
            </p>
            <p className="mb-4 font-sans text-lg font-medium leading-relaxed text-[#304439]/90">
              {t("about.beach_desc_2")}
            </p>
            <p className="mb-8 font-sans text-lg font-medium leading-relaxed text-[#304439]/90">
              {t("about.beach_desc_3")}
            </p>
            <Link
              to="/acomodacoes"
              className="self-start rounded-md bg-[#304439] px-7 py-4 font-sans text-base font-bold text-[#FFD2A2] transition hover:brightness-110"
            >
              {t("common.buttons.make_reservation")}
            </Link>
          </div>
          <div className="order-1 relative h-[400px] w-full overflow-hidden rounded-xl md:order-2 md:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1000&q=80"
              alt="Praia de Juquehy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}