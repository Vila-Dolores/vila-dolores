const baseUrl = import.meta.env.VITE_URL_CLOUDFLARE;
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryPhoto {
  file: string;
  labelKey: string;
  descKey: string;
}

const galleryPhotos: GalleryPhoto[] = [
  { file: "Entrada.webp", labelKey: "location_gallery.items.entrada.name", descKey: "location_gallery.items.entrada.desc" },
  { file: "Juquehy-shopping-lado.webp", labelKey: "location_gallery.items.juquehy_shopping.name", descKey: "location_gallery.items.juquehy_shopping.desc" },
  { file: "juquehy-shopping-frente.webp", labelKey: "location_gallery.items.juquehy_shopping.name", descKey: "location_gallery.items.juquehy_shopping.desc" },
  { file: "bistro-juquehy.webp", labelKey: "location_gallery.items.bistro_juquehy.name", descKey: "location_gallery.items.bistro_juquehy.desc" },
  { file: "gulero-restaurante.webp", labelKey: "location_gallery.items.gulero.name", descKey: "location_gallery.items.gulero.desc" },
  { file: "parque-infantil.webp", labelKey: "location_gallery.items.parque_infantil.name", descKey: "location_gallery.items.parque_infantil.desc" },
  { file: "supermarket.webp", labelKey: "location_gallery.items.supermarket.name", descKey: "location_gallery.items.supermarket.desc" },
  { file: "costa-azul-supermercado.webp", labelKey: "location_gallery.items.costa_azul.name", descKey: "location_gallery.items.costa_azul.desc" },
  { file: "tua-rua-loja.webp", labelKey: "location_gallery.items.tua_rua.name", descKey: "location_gallery.items.tua_rua.desc" },
  { file: "monjolo.webp", labelKey: "location_gallery.items.monjolo.name", descKey: "location_gallery.items.monjolo.desc" },
  { file: "freijó-pizza.webp", labelKey: "location_gallery.items.freijo_pizza.name", descKey: "location_gallery.items.freijo_pizza.desc" },
  { file: "freijó-pizza-placa.webp", labelKey: "location_gallery.items.freijo_pizza.name", descKey: "location_gallery.items.freijo_pizza.desc" },
  { file: "droga-center.webp", labelKey: "location_gallery.items.droga_center.name", descKey: "location_gallery.items.droga_center.desc" },
  { file: "padadaria-A-Portuguesinha.webp", labelKey: "location_gallery.items.padaria.name", descKey: "location_gallery.items.padaria.desc" },
];

function photoUrl(file: string) {
  return `${baseUrl}/entorno/thumbs/${encodeURIComponent(file)}`;
}

export function LocationGallerySection() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Pré-carrega todas as fotos do carrossel assim que a seção aparece,
  // para que rolar para a direita/esquerda ou abrir o lightbox seja
  // instantâneo, sem esperar o download de cada foto.
  useEffect(() => {
    galleryPhotos.forEach((photo) => {
      const preloadImg = new Image();
      preloadImg.src = photoUrl(photo.file);
    });
  }, []);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setActiveIndex(null);
    document.body.style.overflow = "unset";
  };

  const nextPhoto = () => {
    if (activeIndex !== null) {
      setActiveIndex((activeIndex + 1) % galleryPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (activeIndex !== null) {
      setActiveIndex((activeIndex - 1 + galleryPhotos.length) % galleryPhotos.length);
    }
  };

  const scrollByAmount = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white pb-24 font-sans">
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        <h3 className="mb-8 font-sans text-xl font-bold tracking-tight text-[#304439] md:text-2xl">
          {t("location_gallery.title")}
        </h3>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-6 [&::-webkit-scrollbar]:hidden"
          >
            {galleryPhotos.map((photo, index) => (
              <button
                key={`${photo.file}-${index}`}
                type="button"
                onClick={() => openLightbox(index)}
                className="group relative h-48 w-64 shrink-0 snap-start overflow-hidden rounded-xl shadow-md transition hover:shadow-xl md:h-64 md:w-80"
              >
                <img
                  src={photoUrl(photo.file)}
                  alt={t(photo.labelKey)}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end bg-[#304439]/70 p-5 text-left opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                  <span className="w-full text-left font-sans text-base font-bold text-white md:text-lg">
                    {t(photo.labelKey)}
                  </span>
                  <span className="mt-1 w-full text-left font-sans text-xs font-medium leading-snug text-white/90 md:text-sm">
                    {t(photo.descKey)}
                  </span>
                  <span className="mt-3 flex w-full items-center justify-start gap-1 text-left font-sans text-xs font-bold uppercase tracking-wide text-[#FFD2A2]">
                    {t("location_gallery.see_photo")}
                    <ChevronRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollByAmount("left")}
            aria-label="Anterior"
            className="absolute left-0 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 text-[#304439] shadow-lg transition hover:scale-110 hover:bg-[#FFD2A2] md:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount("right")}
            aria-label="Próximo"
            className="absolute right-0 top-1/2 hidden translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 text-[#304439] shadow-lg transition hover:scale-110 hover:bg-[#FFD2A2] md:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm md:p-12">
          <button
            onClick={closeLightbox}
            aria-label="Fechar"
            className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:scale-110 hover:bg-[#FFD2A2] hover:text-[#304439]"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={prevPhoto}
            aria-label="Foto anterior"
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white transition hover:scale-110 hover:text-[#FFD2A2]"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>

          <figure className="flex max-h-full max-w-full flex-col items-center gap-3">
            <img
              src={photoUrl(galleryPhotos[activeIndex].file)}
              alt={t(galleryPhotos[activeIndex].labelKey)}
              className="max-h-[75vh] max-w-full rounded-lg object-contain shadow-2xl"
            />
            <figcaption className="flex flex-col items-center gap-1 text-center">
              <span className="font-sans text-base font-bold text-white">
                {t(galleryPhotos[activeIndex].labelKey)}
              </span>
              <span className="font-sans text-sm font-medium text-white/80">
                {t(galleryPhotos[activeIndex].descKey)}
              </span>
            </figcaption>
          </figure>

          <button
            onClick={nextPhoto}
            aria-label="Próxima foto"
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white transition hover:scale-110 hover:text-[#FFD2A2]"
          >
            <ChevronRight className="h-12 w-12" />
          </button>
        </div>
      )}
    </section>
  );
}