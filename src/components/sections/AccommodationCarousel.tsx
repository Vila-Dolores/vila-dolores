import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const galleries = {
  areia: [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80",
  ],
  mare: [
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
  ],
  horizonte: [
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1000&q=80",
  ],
  brisa: [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80",
  ],
};

type ActiveGalleryType = { id: string; images: string[] };

export function AccommodationsCarousel() {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeGallery, setActiveGallery] = useState<ActiveGalleryType | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (direction === "left") {
      if (container.scrollLeft <= 10) {
        container.scrollTo({ left: maxScroll, behavior: "smooth" });
        return;
      }
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      return;
    }

    if (container.scrollLeft >= maxScroll - 10) {
      container.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const openGallery = (id: string, images: string[]) => {
    setActiveGallery({ id, images });
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setActiveGallery(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    if (!activeGallery) return;
    if (currentImageIndex < activeGallery.images.length) {
      setCurrentImageIndex((prev) => prev + 1);
    }
  };

  const prevImage = () => {
    if (!activeGallery) return;
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prev) => prev - 1);
    }
    if (currentImageIndex === 0) {
      setCurrentImageIndex(activeGallery.images.length);
    }
  };

  return (
    <>
      <section className="relative w-full font-sans" id="acomodacoes">
        <div className="absolute inset-y-0 left-2 z-20 flex items-center md:left-8">
          <button
            onClick={() => scroll("left")}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#304439] text-[#FFD2A2] shadow-lg transition hover:brightness-110 md:h-12 md:w-12"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>

        <div className="absolute inset-y-0 right-2 z-20 flex items-center md:right-8">
          <button
            onClick={() => scroll("right")}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#304439] text-[#FFD2A2] shadow-lg transition hover:brightness-110 md:h-12 md:w-12"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex w-full shrink-0 snap-center bg-[#FAF9F6] py-24">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-14 md:flex-row md:items-center md:px-24">
              <div className="flex h-full flex-1 flex-col justify-start">
                <p className="mb-2 font-sans text-sm font-bold uppercase tracking-[0.2em] text-[#81AF8E]">
                  {t("accommodations.labels.subtitle")}
                </p>
                <h2 className="mb-2 font-sans text-4xl font-extrabold tracking-tight text-[#304439]">
                  {t("accommodations.areia.carousel_title")}
                </h2>
                <p className="mb-6 font-sans text-lg font-semibold text-[#304439]/70">
                  {t("accommodations.areia.carousel_specs")}
                </p>
                <p className="mb-8 font-sans text-xl font-medium italic leading-relaxed text-[#304439]">
                  {t("accommodations.areia.short_desc")}
                </p>
                <ul className="mb-10 flex flex-col gap-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.areia.list.suite")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.areia.list.room")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.areia.list.living")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.areia.list.ac")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.areia.list.kitchen")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.areia.list.backyard")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.areia.list.washer")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.areia.list.kit")}
                    </p>
                  </li>
                </ul>
                <div className="mt-auto flex flex-col gap-8">
                  <p className="font-sans text-lg font-medium leading-relaxed text-[#304439]/90">
                    {t("accommodations.areia.footer")}
                  </p>
                  <Link
                    to="/acomodacoes#areia"
                    className="self-start rounded-md bg-[#304439] px-10 py-4 font-sans text-base font-bold text-[#FFD2A2] transition hover:brightness-110"
                  >
                    {t("common.buttons.see_more")}
                  </Link>
                </div>
              </div>
              <div 
                className="group relative hidden h-[600px] w-full flex-1 cursor-pointer overflow-hidden rounded-xl shadow-xl md:block md:h-[800px]"
                onClick={() => openGallery("areia", galleries.areia)}
              >
                <img
                  src={galleries.areia[0]}
                  alt="Interior da Casa Areia"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-500 group-hover:bg-black/20">
                  <p className="translate-y-4 font-sans text-lg font-bold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {t("common.buttons.view_gallery")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full shrink-0 snap-center bg-[#FFD2A2] py-24">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-14 md:flex-row md:items-center md:px-24">
              <div 
                className="group relative hidden h-[600px] w-full flex-1 cursor-pointer overflow-hidden rounded-xl shadow-xl md:block md:h-[800px]"
                onClick={() => openGallery("mare", galleries.mare)}
              >
                <img
                  src={galleries.mare[0]}
                  alt="Interior da Casa Maré"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-500 group-hover:bg-black/20">
                  <p className="translate-y-4 font-sans text-lg font-bold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {t("common.buttons.view_gallery")}
                  </p>
                </div>
              </div>
              <div className="flex h-full flex-1 flex-col justify-start md:pl-8">
                <p className="mb-2 font-sans text-sm font-bold uppercase tracking-[0.2em] text-[#81AF8E]">
                  {t("accommodations.labels.subtitle")}
                </p>
                <h2 className="mb-2 font-sans text-4xl font-extrabold tracking-tight text-[#304439]">
                  {t("accommodations.mare.carousel_title")}
                </h2>
                <p className="mb-6 font-sans text-lg font-semibold text-[#304439]/70">
                  {t("accommodations.mare.carousel_specs")}
                </p>
                <p className="mb-8 font-sans text-xl font-medium italic leading-relaxed text-[#304439]">
                  {t("accommodations.mare.short_desc")}
                </p>
                <ul className="mb-10 flex flex-col gap-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.mare.list.suite")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.mare.list.room")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.mare.list.living")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.mare.list.ac")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.mare.list.kitchen")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.mare.list.washer")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.mare.list.patio")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.mare.list.shower")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.mare.list.kit")}
                    </p>
                  </li>
                </ul>
                <div className="mt-auto flex flex-col gap-8">
                  <p className="font-sans text-lg font-medium leading-relaxed text-[#304439]/90">
                    {t("accommodations.mare.footer")}
                  </p>
                  <Link
                    to="/acomodacoes#mare"
                    className="self-start rounded-md bg-[#304439] px-10 py-4 font-sans text-base font-bold text-[#FFD2A2] transition hover:brightness-110"
                  >
                    {t("common.buttons.see_more")}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full shrink-0 snap-center bg-[#FAF9F6] py-24">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-14 md:flex-row md:items-center md:px-24">
              <div className="flex h-full flex-1 flex-col justify-start">
                <p className="mb-2 font-sans text-sm font-bold uppercase tracking-[0.2em] text-[#81AF8E]">
                  {t("accommodations.labels.subtitle")}
                </p>
                <h2 className="mb-2 font-sans text-4xl font-extrabold tracking-tight text-[#304439]">
                  {t("accommodations.horizonte.carousel_title")}
                </h2>
                <p className="mb-6 font-sans text-lg font-semibold text-[#304439]/70">
                  {t("accommodations.horizonte.carousel_specs")}
                </p>
                <p className="mb-8 font-sans text-xl font-medium italic leading-relaxed text-[#304439]">
                  {t("accommodations.horizonte.short_desc")}
                </p>
                <ul className="mb-10 flex flex-col gap-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.horizonte.list.suite")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.horizonte.list.room")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.horizonte.list.living")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.horizonte.list.mezzanine")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.horizonte.list.ac")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.horizonte.list.kitchen")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.horizonte.list.washer")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.horizonte.list.solarium")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.horizonte.list.kit")}
                    </p>
                  </li>
                </ul>
                <div className="mt-auto flex flex-col gap-8">
                  <p className="font-sans text-lg font-medium leading-relaxed text-[#304439]/90">
                    {t("accommodations.horizonte.footer")}
                  </p>
                  <Link
                    to="/acomodacoes#horizonte"
                    className="self-start rounded-md bg-[#304439] px-10 py-4 font-sans text-base font-bold text-[#FFD2A2] transition hover:brightness-110"
                  >
                    {t("common.buttons.see_more")}
                  </Link>
                </div>
              </div>
              <div 
                className="group relative hidden h-[600px] w-full flex-1 cursor-pointer overflow-hidden rounded-xl shadow-xl md:block md:h-[800px]"
                onClick={() => openGallery("horizonte", galleries.horizonte)}
              >
                <img
                  src={galleries.horizonte[0]}
                  alt="Interior da Casa Horizonte"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-500 group-hover:bg-black/20">
                  <p className="translate-y-4 font-sans text-lg font-bold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {t("common.buttons.view_gallery")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full shrink-0 snap-center bg-[#FFD2A2] py-24">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-14 md:flex-row md:items-center md:px-24">
              <div 
                className="group relative hidden h-[600px] w-full flex-1 cursor-pointer overflow-hidden rounded-xl shadow-xl md:block md:h-[800px]"
                onClick={() => openGallery("brisa", galleries.brisa)}
              >
                <img
                  src={galleries.brisa[0]}
                  alt="Interior da Casa Brisa"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-500 group-hover:bg-black/20">
                  <p className="translate-y-4 font-sans text-lg font-bold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {t("common.buttons.view_gallery")}
                  </p>
                </div>
              </div>
              <div className="flex h-full flex-1 flex-col justify-start md:pl-8">
                <p className="mb-2 font-sans text-sm font-bold uppercase tracking-[0.2em] text-[#81AF8E]">
                  {t("accommodations.labels.subtitle")}
                </p>
                <h2 className="mb-2 font-sans text-4xl font-extrabold tracking-tight text-[#304439]">
                  {t("accommodations.brisa.carousel_title")}
                </h2>
                <p className="mb-6 font-sans text-lg font-semibold text-[#304439]/70">
                  {t("accommodations.brisa.carousel_specs")}
                </p>
                <p className="mb-8 font-sans text-xl font-medium italic leading-relaxed text-[#304439]">
                  {t("accommodations.brisa.short_desc")}
                </p>
                <ul className="mb-10 flex flex-col gap-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.brisa.list.suite")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.brisa.list.room")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.brisa.list.living")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.brisa.list.mezzanine")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.brisa.list.ac")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.brisa.list.kitchen")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.brisa.list.washer")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.brisa.list.solarium")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      {t("accommodations.brisa.list.kit")}
                    </p>
                  </li>
                </ul>
                <div className="mt-auto flex flex-col gap-8">
                  <p className="font-sans text-lg font-medium leading-relaxed text-[#304439]/90">
                    {t("accommodations.brisa.footer")}
                  </p>
                  <Link
                    to="/acomodacoes#brisa"
                    className="self-start rounded-md bg-[#304439] px-10 py-4 font-sans text-base font-bold text-[#FFD2A2] transition hover:brightness-110"
                  >
                    {t("common.buttons.see_more")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {activeGallery && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm md:p-12">
          <button
            onClick={closeGallery}
            className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:scale-110 hover:bg-[#FFD2A2] hover:text-[#304439]"
          >
            <X className="h-6 w-6" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white transition hover:scale-110 hover:text-[#FFD2A2]"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>

          {currentImageIndex < activeGallery.images.length && (
            <img
              src={activeGallery.images[currentImageIndex]}
              alt={`Galeria de fotos ${currentImageIndex + 1}`}
              className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
            />
          )}

          {currentImageIndex === activeGallery.images.length && (
            <div className="relative flex aspect-video w-full max-w-5xl items-center justify-center overflow-hidden rounded-xl bg-black/50 shadow-2xl backdrop-blur-lg">
              <Link
                to={`/acomodacoes?gallery=${activeGallery.id}`}
                className="font-sans text-xl font-bold text-[#FFD2A2] underline underline-offset-8 transition hover:text-white md:text-3xl"
              >
                {t("common.buttons.see_all_photos")}
              </Link>
            </div>
          )}
          
          {currentImageIndex < activeGallery.images.length && (
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white transition hover:scale-110 hover:text-[#FFD2A2]"
            >
              <ChevronRight className="h-12 w-12" />
            </button>
          )}
        </div>
      )}
    </>
  );
}