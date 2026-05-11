import { MapPin, Navigation, Store } from "lucide-react";

const cards = [
  { icon: MapPin, label: "Ótima localização" },
  { icon: Navigation, label: "A 500m da praia" },
  { icon: Store, label: "A 2 quadras do centro" },
];

export function HeroSection() {
  return (
    <section className="relative h-screen w-screen overflow-hidden font-sans">
      <img
        src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1920&q=80"
        alt="Praia próxima da Vila Dolores"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#304439]/90 to-transparent" />
      
      <div className="absolute inset-x-0 bottom-0 z-10 h-56 bg-gradient-to-t from-[#304439] to-transparent" />

      <header className="absolute top-0 z-50 flex w-full items-center justify-between px-8 py-6">
        <button
          type="button"
          aria-label="Abrir menu"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>

        <div className="absolute left-1/2 top-0 flex h-72 w-96 -translate-x-1/2 translate-y-2 items-center justify-center bg-transparent px-6 py-5">
          <img
            src="/images/logo-original.png"
            alt="Vila Dolores"
            className="h-full w-full object-contain"
          />
        </div>

        <button
          type="button"
          className="rounded-md bg-[#FFD2A2] px-6 py-3 font-sans text-sm font-semibold text-[#304439] transition hover:brightness-95"
        >
          Reserve Já
        </button>
      </header>

      <div className="absolute inset-y-0 left-0 z-40 flex items-center pl-8 md:pl-16">
        <div className="max-w-xl">
          <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#FFD2A2]">
            SEU REFÚGIO PARTICULAR EM JUQUEHY
          </p>
          <h1 className="font-sans text-6xl font-extrabold leading-[0.95] tracking-tight text-white md:text-8xl">
            Vila Dolores
          </h1>
          
          <div className="mt-6 border-l-4 border-[#FFD2A2] pl-5">
            <h2 className="font-sans text-2xl font-medium leading-snug text-[#FFD2A2]">
              House apartments em Juquehy:<br />conforto de casa, praticidade de loft
            </h2>
          </div>

          <div className="mt-8 rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <p className="font-sans text-lg font-medium leading-relaxed text-white/95">
              "Nos anos 80, nossa avó Dolores nos trouxe pela primeira vez a Juquehy. Naquela época, a praia era um segredo bem guardado, com poucas casas e moradores. Décadas depois, transformamos essa memória em um espaço que celebra o acolhimento e o tempo em família e faz quem se hospeda aqui se sentir em casa, mesmo longe de casa."
            </p>
          </div>

          <button
            type="button"
            className="mt-8 rounded-md bg-[#FFD2A2] px-7 py-4 font-sans text-base font-bold text-[#304439] transition hover:brightness-95"
          >
            Ver Disponibilidade →
          </button>
        </div>
      </div>

      <div className="absolute inset-y-0 right-0 z-40 flex items-center pr-8 md:pr-16">
        <div className="flex flex-col gap-4">
          {cards.map((card) => (
            <div
              key={card.label}
              className="flex items-center gap-4 rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-md"
            >
              <card.icon className="h-5 w-5 text-[#FFD2A2]" />
              <p className="font-sans text-sm font-semibold text-white">
                {card.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}