const baseUrl = import.meta.env.VITE_URL_CLOUDFLARE;
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import {
  Play,
  Wind,
  Wifi,
  Coffee,
  Sun,
  Waves,
  Car,
  Tv,
  Ruler,
  Users,
  Droplets,
  Bed,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { accommodationsData } from "../data/accommodations";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { FloatingMenu } from "../components/layout/FloatingMenu";
import { GeneralInfoSection } from "../components/sections/GeneralInfoSection";

const iconMap = {
  wifi: Wifi,
  tv: Tv,
  wind: Wind,
  coffee: Coffee,
  waves: Waves,
  sun: Sun,
  car: Car,
  washer: Droplets,
};

export function Acomodacoes() {
  const { t } = useTranslation();
  const { hash, search } = useLocation();
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [activeGallery, setActiveGallery] = useState<string[] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const element = hash ? document.getElementById(hash.replace("#", "")) : null;
    
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  useEffect(() => {
    const params = new URLSearchParams(search);
    const galleryId = params.get("gallery");
    
    const acc = accommodationsData.find((a) => a.id === galleryId);
    
    if (acc) {
      setActiveGallery(acc.images);
      setCurrentImageIndex(0);
      document.body.style.overflow = "hidden";
    }
  }, [search]);

  // Pré-carrega a foto anterior e a seguinte assim que o lightbox abre
  // ou o usuário navega, para que o clique nas setas troque a imagem
  // instantaneamente em vez de esperar o download.
  useEffect(() => {
    if (!activeGallery || activeGallery.length <= 1) return;

    const nextIndex = (currentImageIndex + 1) % activeGallery.length;
    const prevIndex = (currentImageIndex - 1 + activeGallery.length) % activeGallery.length;

    [nextIndex, prevIndex].forEach((index) => {
      const preloadImg = new Image();
      preloadImg.src = activeGallery[index];
    });
  }, [activeGallery, currentImageIndex]);

  const openVideoModal = (url: string) => {
    setActiveVideoUrl(url);
    document.body.style.overflow = "hidden";
  };

  const closeVideoModal = () => {
    setActiveVideoUrl(null);
    document.body.style.overflow = "unset";
  };

  const openGallery = (images: string[]) => {
    setActiveGallery(images);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setActiveGallery(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    if (activeGallery) {
      setCurrentImageIndex((prev) => (prev + 1) % activeGallery.length);
    }
  };

  const prevImage = () => {
    if (activeGallery) {
      setCurrentImageIndex((prev) => (prev - 1 + activeGallery.length) % activeGallery.length);
    }
  };

  return (
    <div className="relative size-full bg-[#FAF9F6] font-sans">
      <section className="relative flex min-h-[85vh] w-full flex-col overflow-hidden bg-[#304439] md:min-h-[90vh]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover scale-[1.05] blur-sm"
          poster={`${baseUrl}/praia/IMG_8906.webp`}
        >
          <source
            src="https://cdn.pixabay.com/video/2019/04/24/22998-332483011_large.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#FAF9F6] to-transparent md:h-48" />

        <Header />

        <div className="relative z-20 flex flex-1 flex-col items-center justify-end px-6 pb-24 pt-56 text-center md:justify-center md:pt-64 lg:pt-72">
          <h1 className="mb-6 text-4xl font-semibold text-white drop-shadow-xl md:text-6xl lg:text-7xl">
            {t("accommodations.labels.subtitle")}
          </h1>
          <p className="text-xl font-medium text-white/95 drop-shadow-lg md:text-2xl">
            {t("accommodations.labels.explore_details")}
          </p>

          <button 
            onClick={() => openVideoModal("https://www.youtube.com/embed/WIfiR1yENi8?autoplay=1&modestbranding=1&rel=0")}
            className="mt-12 flex items-center gap-3 rounded-full bg-[#FAF9F6] px-8 py-4 text-sm font-bold text-[#304439] shadow-2xl transition hover:scale-105 hover:bg-[#FFD2A2]"
          >
            <Play className="h-5 w-5 fill-current" />
            {t("common.buttons.watch_full_video")}
          </button>
        </div>
      </section>

      <GeneralInfoSection />

      <section className="w-full space-y-32 pb-32 pt-24 md:space-y-48">
        {accommodationsData.map((acc, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div
              key={acc.id}
              id={acc.id}
              className="mx-auto max-w-7xl scroll-mt-32 px-8 md:px-16"
            >
              <div
                className={`flex flex-col gap-12 lg:items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                <div className="w-full flex-1">
                  <div 
                    className="group relative h-[450px] cursor-pointer overflow-hidden rounded-3xl shadow-2xl md:h-[650px]"
                    onClick={() => openGallery(acc.images)}
                  >
                    <img
                      src={acc.images[0]}
                      alt={acc.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-500 group-hover:bg-black/20">
                      <p className="translate-y-4 font-sans text-lg font-bold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        {t("common.buttons.view_gallery")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col">
                  <div className="mb-6">
                    <span className="text-sm font-bold uppercase tracking-widest text-[#81AF8E]">
                      {t(acc.typeKey)}
                    </span>
                    <h3 className="mt-2 text-4xl font-extrabold text-[#304439] md:text-6xl">
                      {acc.name}
                    </h3>
                  </div>

                  <div className="mb-8 flex flex-wrap gap-6 text-[#304439]/70">
                    <div className="flex items-center gap-2">
                      <Users className="h-6 w-6" />
                      <span className="text-xl font-semibold">
                        {t("accommodations.labels.capacity", { count: acc.capacity })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ruler className="h-6 w-6" />
                      <span className="text-xl font-semibold">
                        {t("accommodations.labels.size", { size: acc.size })}
                      </span>
                    </div>
                  </div>

                  <p className="mb-10 text-lg leading-relaxed text-[#304439]/80">
                    {t(acc.fullDescriptionKey)}
                  </p>

                  <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {acc.beds.map((bed, bedIndex) => (
                      <div
                        key={`${bed.typeKey}-${bed.roomKey}-${bedIndex}`}
                        className="flex items-center gap-3"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#304439]/5 text-[#304439]">
                          <Bed className="h-6 w-6" />
                        </div>
                        <span className="text-sm font-bold text-[#304439]/90">
                          {bed.quantity} {t(bed.typeKey)} {t(bed.roomKey)}
                        </span>
                      </div>
                    ))}
                    {acc.amenities.map((item) => {
                      const Icon = iconMap[item.iconName as keyof typeof iconMap] || Sun;
                      return (
                        <div key={item.labelKey} className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#304439]/5 text-[#304439]">
                            <Icon className="h-6 w-6" />
                          </div>
                          <span className="text-sm font-bold text-[#304439]/90">
                            {t(item.labelKey)}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-4">
                    <a
                      href={acc.airbnbUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-[#304439] px-8 py-4 font-bold text-[#FFD2A2] transition hover:brightness-110"
                    >
                      {t("common.buttons.book_airbnb")}
                    </a>
                    <a
                      href={acc.bookingUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border-2 border-[#304439] px-8 py-4 font-bold text-[#304439] transition hover:bg-[#304439] hover:text-white"
                    >
                      {t("common.buttons.book_booking")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <Footer />
      <FloatingMenu />

      {activeVideoUrl && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md md:p-12">
          <button
            onClick={closeVideoModal}
            className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:scale-110 hover:bg-[#FFD2A2] hover:text-[#304439]"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="relative aspect-video w-full max-w-6xl overflow-hidden rounded-2xl bg-black shadow-2xl">
            <iframe
              src={activeVideoUrl}
              title="Vila Dolores Video Tour"
              className="absolute inset-0 h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}

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
          
          <img
            src={activeGallery[currentImageIndex]}
            alt={`Galeria ${currentImageIndex + 1}`}
            className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
          />
          
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white transition hover:scale-110 hover:text-[#FFD2A2]"
          >
            <ChevronRight className="h-12 w-12" />
          </button>
        </div>
      )}
    </div>
  );
}