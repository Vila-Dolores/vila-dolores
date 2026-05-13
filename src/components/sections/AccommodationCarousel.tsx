import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Link } from "react-router";

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

export function AccommodationsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeGallery, setActiveGallery] = useState<string[] | null>(null);
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

  const openGallery = (images: string[]) => {
    setActiveGallery(images);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (!activeGallery) return;
    setCurrentImageIndex((prev) => (prev === activeGallery.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    if (!activeGallery) return;
    setCurrentImageIndex((prev) => (prev === 0 ? activeGallery.length - 1 : prev - 1));
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
          <div className="w-full shrink-0 snap-center bg-[#FAF9F6] py-24 flex">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-14 md:flex-row md:items-center md:px-24">
              <div className="flex flex-1 flex-col justify-start h-full">
                <p className="mb-2 font-sans text-sm font-bold uppercase tracking-[0.2em] text-[#81AF8E]">
                  Nossas acomodações
                </p>
                <h2 className="mb-2 font-sans text-4xl font-extrabold tracking-tight text-[#304439]">
                  Casa 1 "Areia"
                </h2>
                <p className="mb-6 font-sans text-lg font-semibold text-[#304439]/70">
                  térreo | Até 6 pessoas | 70m²
                </p>
                <p className="mb-8 font-sans text-xl font-medium italic leading-relaxed text-[#304439]">
                  Acolhedora e prática — perfeita para famílias menores
                </p>
                <ul className="mb-10 flex flex-col gap-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      1 suíte com cama queen
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      1 quarto com 2 camas de solteiro e banheiro integrado
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Sala de jantar e estar com conceito aberto, sofá-cama casal e TV conectada
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Ar-condicionado em todos os cômodos
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Cozinha equipada com cooktop, geladeira, microondas e utensílios para 6 pessoas
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Pequeno quintal (8 m2)
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Lavanderia com máquina de lavar
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Kit praia: 4 cadeiras + guarda-sol
                    </p>
                  </li>
                </ul>
                <div className="mt-auto flex flex-col gap-8">
                  <p className="font-sans text-lg font-medium leading-relaxed text-[#304439]/90">
                    Perfeita para quem quer chegar, acomodar tudo direitinho e aproveitar o mar sem preocupações.
                  </p>
                  <Link
                    to="/acomodacoes#areia"
                    className="self-start rounded-md bg-[#304439] px-10 py-4 font-sans text-base font-bold text-[#FFD2A2] transition hover:brightness-110"
                  >
                    Ver Mais
                  </Link>
                </div>
              </div>
              <div 
                className="hidden md:block group relative h-[600px] w-full flex-1 cursor-pointer overflow-hidden rounded-xl shadow-xl md:h-[800px]"
                onClick={() => openGallery(galleries.areia)}
              >
                <img
                  src={galleries.areia[0]}
                  alt="Interior da Casa Areia"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-500 group-hover:bg-black/20">
                  <p className="translate-y-4 font-sans text-lg font-bold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    Ver Galeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full shrink-0 snap-center bg-[#FFD2A2] py-24 flex">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-14 md:flex-row md:items-center md:px-24">
              <div 
                className="hidden md:block group relative h-[600px] w-full flex-1 cursor-pointer overflow-hidden rounded-xl shadow-xl md:h-[800px]"
                onClick={() => openGallery(galleries.mare)}
              >
                <img
                  src={galleries.mare[0]}
                  alt="Interior da Casa Maré"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-500 group-hover:bg-black/20">
                  <p className="translate-y-4 font-sans text-lg font-bold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    Ver Galeria
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-start h-full md:pl-8">
                <p className="mb-2 font-sans text-sm font-bold uppercase tracking-[0.2em] text-[#81AF8E]">
                  Nossas acomodações
                </p>
                <h2 className="mb-2 font-sans text-4xl font-extrabold tracking-tight text-[#304439]">
                  Casa 2 "Maré"
                </h2>
                <p className="mb-6 font-sans text-lg font-semibold text-[#304439]/70">
                  térreo | Até 7 pessoas | 80m²
                </p>
                <p className="mb-8 font-sans text-xl font-medium italic leading-relaxed text-[#304439]">
                  Um espaço amplo com pátio gourmet privativo — para curtir depois da praia.
                </p>
                <ul className="mb-10 flex flex-col gap-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      1 suíte com cama queen
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      1 quarto com cama de casal + cama de solteiro e banheiro integrado
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Sala de jantar e estar com conceito aberto, sofá-cama casal e TV conectada
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Ar-condicionado em todos os ambientes
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Cozinha equipada com cooktop, geladeira, micro-ondas e utensílios para 7 pessoas
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Lavanderia com máquina de lavar
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Pátio gourmet privativo com churrasqueira
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Chuveirão exclusivo
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Kit praia: 4 cadeiras + guarda-sol
                    </p>
                  </li>
                </ul>
                <div className="mt-auto flex flex-col gap-8">
                  <p className="font-sans text-lg font-medium leading-relaxed text-[#304439]/90">
                    O ambiente perfeito para churrascos, risadas e bons momentos ao ar livre.
                  </p>
                  <Link
                    to="/acomodacoes#mare"
                    className="self-start rounded-md bg-[#304439] px-10 py-4 font-sans text-base font-bold text-[#FFD2A2] transition hover:brightness-110"
                  >
                    Ver Mais
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full shrink-0 snap-center bg-[#FAF9F6] py-24 flex">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-14 md:flex-row md:items-center md:px-24">
              <div className="flex flex-1 flex-col justify-start h-full">
                <p className="mb-2 font-sans text-sm font-bold uppercase tracking-[0.2em] text-[#81AF8E]">
                  Nossas acomodações
                </p>
                <h2 className="mb-2 font-sans text-4xl font-extrabold tracking-tight text-[#304439]">
                  Casa 3 "Horizonte"
                </h2>
                <p className="mb-6 font-sans text-lg font-semibold text-[#304439]/70">
                  superior | Até 8 pessoas | 90m²
                </p>
                <p className="mb-8 font-sans text-xl font-medium italic leading-relaxed text-[#304439]">
                  Mais espaço em 2 andares, mais conforto e um solarium gourmet privativo — para curtir com a família ou grupo de amigos.
                </p>
                <ul className="mb-10 flex flex-col gap-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      1 suíte com cama box queen
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      1 quarto com 2 camas de solteiro e banheiro integrado
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Sala de jantar e estar com conceito aberto e sofá-cama casal
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Mezanino com TV conectada e sofá-cama casal
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Ar-condicionado em todos os ambientes
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Cozinha equipada com cooktop, geladeira, microondas e utensílios para 8 pessoas
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Lavanderia com máquina de lavar
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Solarium gourmet de 20m² com chuveirão
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Kit praia: 4 cadeiras + guarda-sol
                    </p>
                  </li>
                </ul>
                <div className="mt-auto flex flex-col gap-8">
                  <p className="font-sans text-lg font-medium leading-relaxed text-[#304439]/90">
                    O espaço ideal para quem quer conforto e a liberdade de aproveitar o dia e a noite no seu próprio rooftop.
                  </p>
                  <Link
                    to="/acomodacoes#horizonte"
                    className="self-start rounded-md bg-[#304439] px-10 py-4 font-sans text-base font-bold text-[#FFD2A2] transition hover:brightness-110"
                  >
                    Ver Mais
                  </Link>
                </div>
              </div>
              <div 
                className="hidden md:block group relative h-[600px] w-full flex-1 cursor-pointer overflow-hidden rounded-xl shadow-xl md:h-[800px]"
                onClick={() => openGallery(galleries.horizonte)}
              >
                <img
                  src={galleries.horizonte[0]}
                  alt="Interior da Casa Horizonte"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-500 group-hover:bg-black/20">
                  <p className="translate-y-4 font-sans text-lg font-bold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    Ver Galeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full shrink-0 snap-center bg-[#FFD2A2] py-24 flex">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-14 md:flex-row md:items-center md:px-24">
              <div 
                className="hidden md:block group relative h-[600px] w-full flex-1 cursor-pointer overflow-hidden rounded-xl shadow-xl md:h-[800px]"
                onClick={() => openGallery(galleries.brisa)}
              >
                <img
                  src={galleries.brisa[0]}
                  alt="Interior da Casa Brisa"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-500 group-hover:bg-black/20">
                  <p className="translate-y-4 font-sans text-lg font-bold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    Ver Galeria
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-start h-full md:pl-8">
                <p className="mb-2 font-sans text-sm font-bold uppercase tracking-[0.2em] text-[#81AF8E]">
                  Nossas acomodações
                </p>
                <h2 className="mb-2 font-sans text-4xl font-extrabold tracking-tight text-[#304439]">
                  Casa 4 "Brisa"
                </h2>
                <p className="mb-6 font-sans text-lg font-semibold text-[#304439]/70">
                  superior | Até 8 pessoas | 90m²
                </p>
                <p className="mb-8 font-sans text-xl font-medium italic leading-relaxed text-[#304439]">
                  Mais espaço em 2 andares, mais conforto e um solário gourmet privativo — para curtir com a família ou grupo de amigos. Mesma estrutura e charme da Casa Horizonte.
                </p>
                <ul className="mb-10 flex flex-col gap-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      1 suíte com cama box queen
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      1 quarto com duas camas de solteiro e banheiro integrado
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Sala de jantar e estar com conceito aberto e sofá-cama casal
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Mezanino com TV conectada e sofá-cama casal
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Ar-condicionado em todos os ambientes
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Cozinha equipada com cooktop, geladeira, microondas e utensílios para 8 pessoas
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Lavanderia com máquina de lavar
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Solário gourmet de 20m² com chuveirão
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
                    <p className="font-sans text-lg font-medium text-[#304439]/90">
                      Kit praia: 4 cadeiras + guarda-sol
                    </p>
                  </li>
                </ul>
                <div className="mt-auto flex flex-col gap-8">
                  <p className="font-sans text-lg font-medium leading-relaxed text-[#304439]/90">
                    O espaço ideal para quem quer conforto e a liberdade de aproveitar o dia e a noite no seu próprio rooftop.
                  </p>
                  <Link
                    to="/acomodacoes#brisa"
                    className="self-start rounded-md bg-[#304439] px-10 py-4 font-sans text-base font-bold text-[#FFD2A2] transition hover:brightness-110"
                  >
                    Ver Mais
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
            onClick={() => setActiveGallery(null)}
            className="absolute right-6 top-6 text-white transition hover:scale-110 hover:text-[#FFD2A2]"
          >
            <X className="h-10 w-10" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white transition hover:scale-110 hover:text-[#FFD2A2]"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>
          
          <img
            src={activeGallery[currentImageIndex]}
            alt={`Galeria de fotos ${currentImageIndex + 1}`}
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
    </>
  );
}