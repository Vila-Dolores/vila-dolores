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
  X
} from "lucide-react";
import { accommodationsData } from "../data/accommodations";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { FloatingMenu } from "../components/layout/FloatingMenu";

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
  const { hash } = useLocation();
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    const element = hash
      ? document.getElementById(hash.replace("#", ""))
      : null;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  const openVideoModal = (url: string) => {
    setActiveVideoUrl(url);
    document.body.style.overflow = "hidden";
  };

  const closeVideoModal = () => {
    setActiveVideoUrl(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="relative size-full bg-[#FAF9F6] font-sans">
      <section className="relative flex min-h-[75vh] w-full flex-col overflow-hidden bg-[#304439] md:min-h-[85vh]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-overlay"
          poster="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1920&q=80"
        >
          <source
            src="https://cdn.pixabay.com/video/2019/04/24/22998-332483011_large.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#FAF9F6] to-transparent md:h-48" />

        <Header />

        <div className="relative z-20 flex flex-1 flex-col items-center justify-center px-6 pt-24 pb-24 text-center">
          <h1 className="mb-6 text-4xl font-extrabold text-white drop-shadow-xl md:text-6xl lg:text-7xl">
            Sinta a Experiência
          </h1>
          <p className="text-xl font-medium text-white/95 drop-shadow-lg md:text-2xl">
            Um tour imersivo pelo seu próximo refúgio
          </p>

          <button 
            onClick={() => openVideoModal("https://www.youtube.com/embed/WIfiR1yENi8?autoplay=1&modestbranding=1&rel=0")}
            className="mt-12 flex items-center gap-3 rounded-full bg-[#FAF9F6] px-8 py-4 text-sm font-bold text-[#304439] shadow-2xl transition hover:scale-105 hover:bg-[#FFD2A2]"
          >
            <Play className="h-5 w-5 fill-current" />
            ASSISTIR VÍDEO COMPLETO
          </button>
        </div>
      </section>

      <div className="bg-[#FAF9F6] px-6 pb-16 pt-24 text-center">
        <div className="mx-auto mb-12 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-[#304439]/20" />
          <div className="h-3 w-3 rotate-45 border border-[#304439]/40" />
          <span className="h-px w-16 bg-[#304439]/20" />
        </div>
        <h2 className="mx-auto max-w-3xl text-3xl font-light italic leading-relaxed text-[#304439] md:text-4xl">
          O luxo do tempo, o conforto de casa. Desenhamos cada unidade da Vila
          Dolores para ser um santuário particular onde as memórias acontecem.
        </h2>
        <p className="mt-12 text-sm font-bold uppercase tracking-[0.3em] text-[#81AF8E]">
          Explore os detalhes
        </p>
      </div>

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
                  <div className="relative h-[450px] overflow-hidden rounded-3xl shadow-2xl md:h-[650px]">
                    <img
                      src={acc.images[0]}
                      alt={acc.name}
                      className="h-full w-full object-cover"
                    />
                    <button 
                      onClick={() => openVideoModal("https://www.youtube.com/embed/WIfiR1yENi8?autoplay=1&modestbranding=1&rel=0")}
                      className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full bg-[#304439]/90 px-6 py-3 text-sm font-bold text-[#FFD2A2] backdrop-blur-md transition hover:scale-105"
                    >
                      <Play className="h-4 w-4 fill-current" />
                      Video Tour {acc.name}
                    </button>
                  </div>
                </div>

                <div className="flex flex-1 flex-col">
                  <div className="mb-6">
                    <span className="text-sm font-bold uppercase tracking-widest text-[#81AF8E]">
                      {acc.type}
                    </span>
                    <h3 className="mt-2 text-4xl font-extrabold text-[#304439] md:text-6xl">
                      Casa {acc.name}
                    </h3>
                  </div>

                  <div className="mb-8 flex flex-wrap gap-6 text-[#304439]/70">
                    <div className="flex items-center gap-2">
                      <Users className="h-6 w-6" />
                      <span className="text-xl font-semibold">
                        {acc.capacity} pessoas
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ruler className="h-6 w-6" />
                      <span className="text-xl font-semibold">
                        {acc.size}m²
                      </span>
                    </div>
                  </div>

                  <p className="mb-10 text-lg leading-relaxed text-[#304439]/80">
                    {acc.fullDescription}
                  </p>

                  <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {acc.amenities.map((item) => {
                      const Icon =
                        iconMap[item.iconName as keyof typeof iconMap] || Sun;
                      return (
                        <div
                          key={item.label}
                          className="flex items-center gap-3"
                        >
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#304439]/5 text-[#304439]">
                            <Icon className="h-6 w-6" />
                          </div>
                          <span className="text-sm font-bold text-[#304439]/90">
                            {item.label}
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
                      Reservar via Airbnb
                    </a>
                    <a
                      href={acc.bookingUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border-2 border-[#304439] px-8 py-4 font-bold text-[#304439] transition hover:bg-[#304439] hover:text-white"
                    >
                      Ver no Booking
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

    </div>
  );
}