import { MapPin, Navigation, Store } from "lucide-react";
import { Link } from "react-router";
import { Header } from "../layout/Header";

const cards = [
  { icon: MapPin, label: "Ótima localização" },
  { icon: Navigation, label: "A 500m da praia" },
  { icon: Store, label: "A 2 quadras do centro" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#304439] font-sans flex flex-col" id="hero">
      <img
        src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1920&q=80"
        alt="Praia próxima da Vila Dolores"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#304439]/80 via-[#304439]/40 to-[#304439] md:bg-gradient-to-r md:from-[#304439]/95 md:to-[#304439]/40 lg:to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#304439] to-transparent md:h-48" />

      <Header />

      <div className="relative z-40 flex flex-1 flex-col justify-end px-6 pb-32 pt-20 md:justify-center md:pl-16 md:pb-0 md:pt-0">
        <div className="max-w-2xl">
          <p className="mb-2 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD2A2] md:text-xs">
            SEU REFÚGIO PARTICULAR EM JUQUEHY
          </p>
          <h1 className="font-sans text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            Vila Dolores
          </h1>
          
          <div className="mt-3 border-l-4 border-[#FFD2A2] pl-4 md:mt-6 md:pl-5">
            <h2 className="font-sans text-lg font-medium leading-snug text-[#FFD2A2] md:text-xl lg:text-2xl">
              House apartments em Juquehy:<br className="hidden md:block" />conforto de casa, praticidade de loft
            </h2>
          </div>

          <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md md:mt-8 md:p-6 md:bg-white/10 md:border-white/20">
            <p className="font-sans text-sm font-medium leading-relaxed text-white/90 md:text-base lg:text-lg">
              &quot;Nos anos 80, nossa avó Dolores nos trouxe pela primeira vez a Juquehy. Naquela época, a praia era um segredo bem guardado, com poucas casas e moradores. Décadas depois, transformamos essa memória em um espaço que celebra o acolhimento e o tempo em família e faz quem se hospeda aqui se sentir em casa, mesmo longe de casa.&quot;
            </p>
          </div>

          <Link
            to="/acomodacoes"
            className="mt-6 inline-block rounded-md bg-[#FFD2A2] px-8 py-3.5 font-sans text-sm font-bold text-[#304439] shadow-lg md:mt-8 md:px-10 md:py-4 md:text-base transition hover:brightness-110"
          >
            Ver Disponibilidade →
          </Link>
        </div>
      </div>

      <div className="absolute inset-y-0 right-0 z-40 hidden items-center pr-16 lg:flex">
        <div className="flex flex-col gap-4">
          {cards.map((card) => (
            <div key={card.label} className="flex items-center gap-4 rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-md transition-transform hover:scale-105">
              <card.icon className="h-5 w-5 text-[#FFD2A2]" />
              <p className="font-sans text-sm font-semibold text-white">{card.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}